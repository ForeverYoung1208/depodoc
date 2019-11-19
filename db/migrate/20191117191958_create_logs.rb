class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.references :user, null: false
      t.string :changed_model
      t.bigint :changed_id
      t.string :from_value
      t.string :to_value
      t.text :note

      t.timestamps
    end
  end
end
