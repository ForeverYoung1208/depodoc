class CreateRolesUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :roles_users do |t|
      t.references :role, index: true
      t.references :user, index: true
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
