class State < ApplicationRecord
	self.abstract_class = true
	serialize :possible_changes, Array

end