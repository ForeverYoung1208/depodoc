class CreateOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :operations do |t|
      t.bigint :side1_id, null: false, foreign_key: {to_table: :faces}
      t.bigint :side2_id, null: false, foreign_key: {to_table: :faces}
      t.bigint :company_id, null: false, foreign_key: true
      t.bigint :manager_id, null: false, foreign_key: {to_table: :users}
      t.bigint :optype_id, null: false, foreign_key: true
      t.text :note

      t.datetime :deleted_at 

      t.timestamps
    end
  end
end
