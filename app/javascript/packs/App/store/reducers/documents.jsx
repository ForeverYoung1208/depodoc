import { FETCH_DOCUMENTS, RESET_DOCUMENTS, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_ERROR,
POST_DOCUMENT_OK, POST_DOCUMENT_START} from '../actions/actionTypes';


const initialState = {
	documents: [],
  isLoading: false,
  fetchErrorText: null
}


export default function documentsReducer(state=initialState, action) {

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
        isLoading: false,
        fetchErrorText: null
      };

    case FETCH_DOCUMENTS_ERROR:
      console.log( action.error)
      return {
        ...state,
        isLoading: false,
        fetchErrorText: action.error.message
      };


      case POST_DOCUMENT_OK:
      return{
        ...state,
        isLoading: true
      }

      case POST_DOCUMENT_START:
      return{
        ...state,
        isLoading: false
      }




    case RESET_DOCUMENTS:
      return {
      	...state,
      	documents: []
      };

    default:
	    return state
  }
}