class CreateOpstateChanges < ActiveRecord::Migration[6.0]
  def change
    create_table :opstate_changes do |t|
      t.references :operation, null: false, foreign_key: true
      t.date :date
      t.references :from_state, null: false, foreign_key: {to_table: :opstates}
      t.references :to_state, null: false, foreign_key: {to_table: :opstates}
      t.references :user, null:false, foreign_key: false
      t.text :note
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
