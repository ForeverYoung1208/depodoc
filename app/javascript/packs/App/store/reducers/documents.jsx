import { FETCH_DOCUMENTS, RESET_DOCUMENTS, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_ERROR} from '../actions/actionTypes';


const initialState = {
	documents: [],
  isLoading: false,
  documentsFetchError: null
}


export default function documentsReducer(state=initialState, action) {
  console.log( action)

  switch (action.type) {
    case FETCH_DOCUMENTS_START:
      return {
      	...state,
      	isLoading: true
      };

    case FETCH_DOCUMENTS_OK:
      return {
        ...state,
        documents: action.documents,
        isLoading: false
      };

    case FETCH_DOCUMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        documentsFetchError: action.error
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