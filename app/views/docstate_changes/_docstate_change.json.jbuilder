json.extract! docstate_change, :id, :document_id, :from_state_id, :to_state_id, :user_references, :note, :created_at, :updated_at
json.url docstate_change_url(docstate_change, format: :json)
