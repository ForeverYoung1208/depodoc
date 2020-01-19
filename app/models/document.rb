class Document < ApplicationRecord
	
	default_scope { where("deleted_at IS NULL")}	

  belongs_to :face
  belongs_to :doctype
  has_many :docstate_changes
  has_and_belongs_to_many :operations
end

public

def at_companies
	cmps = operations.map { |op| op.company  }
	cmps.uniq
end

def last_docstate
	docstate_changes.last && docstate_changes.last.to_state.name
	
end
