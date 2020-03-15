class DocstateChange < StateChange
  belongs_to :document
  belongs_to :user

  belongs_to :from_state, class_name: :Docstate, foreign_key: :from_state_id
  belongs_to :to_state, class_name: :Docstate, foreign_key: :to_state_id


end
