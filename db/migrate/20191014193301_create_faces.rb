class CreateFaces < ActiveRecord::Migration[6.0]
  def change
    create_table :faces do |t|
      t.string :code
      t.string :name
      t.text :note
      t.boolean :is_fiz
      t.boolean :is_resident

      t.timestamps
    end
  end
end
