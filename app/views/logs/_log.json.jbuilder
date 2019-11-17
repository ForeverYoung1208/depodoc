json.extract! log, :id, :user_id, :changed_model, :changed_id, :from_value, :to_value, :note, :created_at, :updated_at
json.url log_url(log, format: :json)
