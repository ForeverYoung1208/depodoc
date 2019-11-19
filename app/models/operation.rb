class Operation < ApplicationRecord

	# default_scope { where("deleted_at IS NULL")}

  belongs_to :side1, class_name: :Face
  belongs_to :side2, class_name: :Face
  belongs_to :company
  belongs_to :manager, class_name: :User
  belongs_to :optype


end
