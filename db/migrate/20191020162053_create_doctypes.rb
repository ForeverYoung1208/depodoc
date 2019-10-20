class CreateDoctypes < ActiveRecord::Migration[6.0]
  def change
    create_table :doctypes do |t|
      t.string :name

      t.timestamps
    end
  end
end
