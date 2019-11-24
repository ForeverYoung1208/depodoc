const fake_documents = [
	{
		"id":1,
		"name":"document1_name",
		"face_id":1,
		"note":"document1_note",
		"created_at":"2019-11-20T20:08:14.538Z",
		"updated_at":"2019-11-20T20:08:14.538Z"
	},
	{"id":2,"name":"document2_name","face_id":2,"note":"document2_note","created_at":"2019-11-20T20:08:14.545Z","updated_at":"2019-11-20T20:08:14.545Z"}
]

export function documentsReducer(state, action) {
  switch (action.type) {
    case 'get_documents':
      return { documents: fake_documents };
    case 'reset':
    	return {documents: [{id:1, name: action.payload}]};
    default:
      throw new Error('unknown documents reducer action');
  }
}