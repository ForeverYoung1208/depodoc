class CreateDocstateChanges < ActiveRecord::Migration[6.0]
  def change
    create_table :docstate_changes do |t|
      t.references :document, null: false, foreign_key: true
      t.references :from_state, null: false, foreign_key: {to_table: :docstates}
      t.references :to_state, null: false, foreign_key: {to_table: :docstates}
      t.references :user, null:false, foreign_key: false
      t.text :note

      t.datetime :deleted_at 

      t.timestamps
    end
  end
end
