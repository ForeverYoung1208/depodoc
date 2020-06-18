import {
  RESET_DOCUMENTS,
  FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_ERROR,
  POST_DOCUMENT_OK, POST_DOCUMENT_START, POST_DOCUMENT_ERROR, SAVE_NEW_FACE_START, SAVE_NEW_FACE_OK, SAVE_NEW_FACE_ERROR,
  actionsTypes
} from '../actions/actionTypes';


const initialState = {
	documents: [] as Array<documentType>,
  isLoading: false,
  fetchErrorText: null as string
}


export default function documentsReducer(
    state=initialState, 
    action: { type: actionsTypes; documents: Array<documentType>; error: { message: string; }}
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
      };

    case SAVE_NEW_FACE_START:
      return {
        ...state,
        isLoading:true
      };
    case SAVE_NEW_FACE_OK:
      return {
        ...state,
        //TODO
        //...
      };
    case SAVE_NEW_FACE_ERROR:
      return {
        ...state,
        //TODO
        //...
    };

    default:
	    return state
  }
}

export type documentsStateType = typeof initialState;
export interface documentType{
  companies?: [];
  created_at: string;
  creator_name: string;
  doctype: string;
  face: {id: number, name: string};
  id: number;
  last_docstate: {id: number, name: string, possible_changes: Array<number>}
  name: string;
  note: string;
  operations: Array<number>;
  updated_at: string;
}