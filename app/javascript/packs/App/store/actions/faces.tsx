import Axios from '../../axios/customAxios'

import {
  SAVE_NEW_FACE_START, SAVE_NEW_FACE_OK, SAVE_NEW_FACE_ERROR,
  actionsTypesType, thunkActionType, 
} from './actionTypes';
import { faceType } from '../types/types';
import { FormikHelpers } from 'formik'


///TODO: turn to saga
export function saveNewFace(face:faceType, formikActions:FormikHelpers<any>):thunkActionType{
	return async (dispatch)=>{
		dispatch(()=> ({type: SAVE_NEW_FACE_START}))
		try {
			let savedFace = Axios.post(
				'/faces.json',
				face
			)
			dispatch(()=>({type: SAVE_NEW_FACE_OK, payload: savedFace}))
		} catch (e) {
			dispatch(()=>({type: SAVE_NEW_FACE_ERROR, payload: e}))
		}
		
	}

}
