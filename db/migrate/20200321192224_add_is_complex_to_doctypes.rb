class AddIsComplexToDoctypes < ActiveRecord::Migration[6.0]
  def change
    add_column :doctypes, :isComplex, :boolean
  end
end
