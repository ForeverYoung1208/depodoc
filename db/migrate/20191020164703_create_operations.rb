class CreateOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :operations do |t|
      t.bigint :side1, null: false, foreign_key: {to_table: :faces}
      t.bigint :side2, null: false, foreign_key: {to_table: :faces}
      t.bigint :company, null: false, foreign_key: true
      t.bigint :manager, null: false, foreign_key: {to_table: :users}
      t.bigint :optype, null: false, foreign_key: true
      t.text :note

      t.datetime :deleted_at 

      t.timestamps
    end
  end
end
