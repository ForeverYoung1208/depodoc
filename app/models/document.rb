class Document < ApplicationRecord
  belongs_to :face
  belongs_to :doctype
  has_many :docstate_changes
end
