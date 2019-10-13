class CreateRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :roles do |t|
      t.string :name
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
