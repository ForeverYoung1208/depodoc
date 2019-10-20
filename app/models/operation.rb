class Operation < ApplicationRecord
  belongs_to :side1
  belongs_to :side2
  belongs_to :company
  belongs_to :manager
  belongs_to :optype
end
