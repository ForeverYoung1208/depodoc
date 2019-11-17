class AddDeletedAtToFaces < ActiveRecord::Migration[6.0]
  def change
    add_column :faces, :deleted_at, :datetime
  end
end
