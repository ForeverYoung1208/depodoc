class AddDoctypeToDocument < ActiveRecord::Migration[6.0]
  def change
    change_table :documents do |t|
	    t.references :doctype, null:false, foreign_key: true
	  end  	
  end
end
