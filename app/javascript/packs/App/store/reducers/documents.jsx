import {FETCH_DOCUMENTS} from '../actions/actionTypes'


const initialState = {
	documents: []
}


export default function documentsReducer(state=initialState, action) {
	console.log(action)
  switch (action.type) {
    case FETCH_DOCUMENTS:
      return {
      	...state,
      	documents: action.documents
      };

    case 'reset':
    	return {
    		...state,
    		documents: []
    	};


    default:
	    return state
      // throw new Error('CustomError: unknown documents reducer action');
  }
}