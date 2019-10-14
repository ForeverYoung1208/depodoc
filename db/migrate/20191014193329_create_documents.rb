class CreateDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :documents do |t|
      t.string :name
      t.references :face, null: false, foreign_key: true
      t.text :note

      t.timestamps
    end
  end
end
