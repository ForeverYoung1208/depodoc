class User < Tm2Record
  
  # db_config = YAML.load( ERB.new( File.read('config/database.yml')).result )
  # establish_connection( db_config['users_'+ Rails.env.downcase] )

  before_destroy { |record| raise "ReadOnlyRecord" }
  after_initialize :get_roles_names

  has_and_belongs_to_many :roles
  has_many :docstate_changes
  has_many :opstate_changes
  has_many :logs
  has_many :operations

  mattr_accessor :current_user

  attr_accessor :password


  attr_reader :roles_names

  def get_roles_names
    @roles_names = self.roles.active.pluck(:name)
  end 



  def self.authenticate(name, password)
   	user = find_by_name(name)
   	if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
   		user
   	else
   		nil
   	end
  end

  def ip_check(remote_ip)
    #Turn off ip check
    #     !self.is_ip_controlled || self.ip_address == remote_ip || ::SUPERUSERS.include?(self.name)
    true
  end


  def readonly?
    true
  end

  def encrypt_password
		if password.present?
			self.password_salt = BCrypt::Engine.generate_salt
			self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
		end
  end

  def allowed_users_ids
    if self.is_admin
      res = User.all.pluck(:id) 
    else
      res = [self.id]
    end
    res
  end

  def is_admin
    # self.roles.active.pluck(:id).include?( ::ADMIN_ROLE_ID )
    self.roles.active.where(id: ::ADMIN_ROLE_ID).count >= 1
  end

  def self.all_with_any_role
    uids = RolesUser.all.pluck(:user_id)

    self.where(id: uids)

  end

#================
  def can_view_users?
    # true
    is_admin
  end

  def can_edit_users?
    # true
    is_admin
  end  

  def can_edit_roles?
    # true
    is_admin
  end

  def can_edit_docstates?
    # true
    is_admin
  end

  def can_edit_docstypes?
    true
  end

  def can_edit_faces?
    true
  end

  def can_tune_documents?
    roles.pluck(:name).include?('can_tune_documents')
  end


#  def can_close_day?
#    is_admin or roles.pluck(:name).includes('can_close_day')
#  end


end
