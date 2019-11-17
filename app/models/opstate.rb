class Opstate < State
	belongs_to :operation

  has_many :as_from_state, class_name: :OpstateChange
  has_many :as_to_state, class_name: :OpstateChange
	
end
