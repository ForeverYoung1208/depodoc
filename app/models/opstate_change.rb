class OpstateChange < ApplicationRecord
  belongs_to :operation
  belongs_to :from_state
  belongs_to :to_state
end
