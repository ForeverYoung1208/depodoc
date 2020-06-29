import {
  RESET_DOCUMENTS,
  FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_ERROR,
  POST_DOCUMENT_OK, POST_DOCUMENT_START, POST_DOCUMENT_ERROR,
  actionsTypesType
} from '../actions/actionTypes';
import { documentType, errorType } from '../types/types';

const initialState = {
	documents: [] as Array<documentType>,
  isLoading: false,
  fetchErrorText: null as string
}
export type documentsStateType = typeof initialState;

export default function documentsReducer(
    state: documentsStateType = initialState, 
    action: { type: actionsTypesType; documents: Array<documentType>; error:errorType}
  ):documentsStateType {
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
        documents: [...state.documents, ...action.documents ]
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
      }
    default:
	    return state
  }
}
