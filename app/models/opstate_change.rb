class OpstateChange < StateChange
  belongs_to :operation
  belongs_to :from_state, class_name: :Opstate, foreign_key: :from_state_id
  belongs_to :to_state, class_name: :Opstate, foreign_key: :to_state_id


end
