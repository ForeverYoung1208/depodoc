class CreateDocstates < ActiveRecord::Migration[6.0]
  def change
    create_table :docstates do |t|
      t.string :name
      t.text :possible_changes

      t.timestamps
    end
  end
end
