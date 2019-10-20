class OperationsDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :operations_documents do |t|
      t.references :operation, null: false, foreign_key: true;
      t.references :document, null: false, foreign_key: true;
    end

  end
end
