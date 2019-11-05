const fake_documents = [
	{
		id:1,
		name: 'fdoc1'
	},
	{
		id:2,
		name: 'fdoc2'
	},
]


export function documentsReducer(state, action) {
  switch (action.type) {
    case 'get_documents':
      return { documents: fake_documents };
    case 'reset':
    	return {documents: [{id:1, name: action.payload}]};
    default:
      throw new Error('unknown reducer action');
  }
}