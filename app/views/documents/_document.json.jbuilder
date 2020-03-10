# json.extract! document, :id, :name, :face, :note, :created_at, :updated_at


json.id document.id
json.doctype document.doctype.name
json.name document.name
json.note document.note
json.created_at document.created_at.try(:strftime, "%Y-%m-%d")
json.updated_at document.updated_at.try(:strftime, "%Y-%m-%d")
json.last_docstate do
	json.id document.last_docstate.try(:id)
	json.name document.last_docstate.try(:name)
end
json.face do
	json.id document.face.id
	json.name document.face.name
end
json.companies document.at_companies do |at_company|
	json.id at_company.id
	json.name at_company.name
end
json.operations document.operations do |operation|
	json.id operation.id
	json.name operation.optype.name
	json.side1 operation.side1.name
	json.side2 operation.side2.name
	json.manager operation.manager.name
	json.updated_at operation.updated_at.try(:strftime, "%Y-%m-%d")
end
