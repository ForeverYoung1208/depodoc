class AddCreatorNameToDocuments < ActiveRecord::Migration[6.0]
  def change
    change_table :documents do |t|
      t.string :creator_name
      t.bigint :creator_id, null: false, foreign_key: false
    end
  end
end
