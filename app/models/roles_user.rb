class RolesUser < ApplicationRecord
  belongs_to :role
  belongs_to :user

	default_scope { where("deleted_at IS NULL")}

  validates :user_id, uniqueness: { scope: [:role_id, :deleted_at] }

end
