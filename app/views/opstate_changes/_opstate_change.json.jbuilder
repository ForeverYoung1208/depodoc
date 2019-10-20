json.extract! opstate_change, :id, :operation_id, :date, :from_state_id, :to_state_id, :user_references, :note, :deleted_at, :created_at, :updated_at
json.url opstate_change_url(opstate_change, format: :json)
