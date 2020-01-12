import { FETCH_DOCUMENTS, RESET_DOCUMENTS } from '../actions/actionTypes';


const initialState = {
	documents: []
}


export default function documentsReducer(state=initialState, action) {

  switch (action.type) {
    case FETCH_DOCUMENTS:
      return {
      	...state,
      	documents: action.documents
      };

    case RESET_DOCUMENTS:
      return {
      	...state,
      	documents: []
      };

    default:
	    return state
  }
}