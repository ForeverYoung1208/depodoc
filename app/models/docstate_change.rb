class DocstateChange < StateChange
  belongs_to :document
  belongs_to :from_state
  belongs_to :to_state
end
