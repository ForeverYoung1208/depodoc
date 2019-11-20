class Docstate < State
	# has_many :documents

  has_many :as_from_state, class_name: :StateChange
  has_many :as_to_state, class_name: :StateChange
	
end
