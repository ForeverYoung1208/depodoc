class Document < ApplicationRecord
	
	# default_scope { where("deleted_at IS NULL")}	

  belongs_to :face
  belongs_to :doctype
  has_many :docstate_changes
end
