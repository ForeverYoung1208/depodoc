import {
  RESET_DOCUMENTS,
  FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_ERROR,
  POST_DOCUMENT_OK, POST_DOCUMENT_START, POST_DOCUMENT_ERROR, SAVE_NEW_FACE_START, SAVE_NEW_FACE_OK, SAVE_NEW_FACE_ERROR
} from '../actions/actionTypes';


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

    case POST_DOCUMENT_START:
      return{
        ...state,
        isLoading: true
      }
    case POST_DOCUMENT_OK:
      return{
        ...state,
        isLoading: false,
        documents: [...state.documents, action.document ]
      }
    case POST_DOCUMENT_ERROR:
      return{
        ...state,
        isLoading:false,
        fetchErrorText: action.error.message
      }

      case RESET_DOCUMENTS:
      return {
      	...state,
      	documents: []
      };

    case SAVE_NEW_FACE_START:
      return {
        ...state,
        is_loading:true
      };
    case SAVE_NEW_FACE_OK:
      return {
        //...
      };
    case SAVE_NEW_FACE_ERROR:
      return {
        //...
      };
    

    

    default:
	    return state
  }
}