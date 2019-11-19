class Face < ApplicationRecord

	# default_scope { where("deleted_at IS NULL")}

	has_many :operation_side_1, class_name: :Operation
	has_many :operation_side_2, class_name: :Operation
	has_many :documents
end
