import {
  actionsTypesType, SAVE_NEW_FACE_START, SAVE_NEW_FACE_OK, SAVE_NEW_FACE_ERROR
} from '../actions/actionTypes';
import { faceType, facesPayloadType, errorType } from '../types/types';

const initialState = {
	faces: [] as Array<faceType>,
  isLoading: false,
  fetchErrorText: null as string
}
export type facesStateType = typeof initialState;

export default function facesReducer(
  state: facesStateType = initialState, 
  action: { type: actionsTypesType, payload: facesPayloadType }
):facesStateType {
  switch (action.type) {
    case SAVE_NEW_FACE_START:
      return {
        ...state,
        isLoading:true
      };
    case SAVE_NEW_FACE_OK:
      return {
        ...state,
        isLoading:false,
        faces: [...state.faces, ...action.payload.faces]
      };
    case SAVE_NEW_FACE_ERROR:
      return {
        ...state,
        isLoading:false,
        fetchErrorText: action.payload.error.message
    }
    default:
      return state
  }
}