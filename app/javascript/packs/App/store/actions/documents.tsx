import * as React from 'react'
import {ActionCreator} from 'redux'
import Axios from '../../axios/customAxios'
import {RESET_DOCUMENTS, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_ERROR,
	POST_DOCUMENT_START, POST_DOCUMENT_OK, POST_DOCUMENT_ERROR,
	SAVE_NEW_FACE_START, SAVE_NEW_FACE_OK, SAVE_NEW_FACE_ERROR,
	actionsTypesType
} from './actionTypes';
import { documentType } from '../reducers/documents';
import { FormikHelpers } from 'formik'


// TODO define more exact types
export type thunkActionType = any;
export type faceType = any;
////

export function fetchDocuments():thunkActionType {
	// return async (dispatch, getState) => {     //its possible to access store from thunk's action but it is bad practice
	return async (dispatch) => {
		dispatch(fetchDocumentsStart())

		try{
			// console.log('[getState()]', getState());
			const documents = await Axios.get('/documents.json').then(res=> res.data)
			dispatch(fetchDocumentsOk(documents))
		} catch (e) {
			console.log('fetchDocuments error---:', e)	
			dispatch(fetchDocumentsError(e))
		}
	}
};

function fetchDocumentsStart():{type:actionsTypesType} {
	return({
		type: FETCH_DOCUMENTS_START
	})
}

function fetchDocumentsOk(documents:Array<documentType>):{type:actionsTypesType, documents:Array<documentType>} {
	return({
    type: FETCH_DOCUMENTS_OK,
    documents
	})
}

function fetchDocumentsError(error:string):{type:actionsTypesType, error:string}{
	return({
    type: FETCH_DOCUMENTS_ERROR,
    error
	})
}

export function postStateChange(
		docId:number, 
		oldStateId:number, 
		newStateId:number, 
		note:string, 
		formikActions: FormikHelpers<any>, 
		closeModalFn: Function
	):thunkActionType {
	return async (dispatch) => {
		dispatch(postDocumentStart())
		try{
			const response = await Axios.post(
				'/docstate_changes.json', 
				{
					document_id: docId,
					from_state_id: oldStateId, 
					to_state_id: newStateId,
					note
				})
			dispatch(fetchDocuments());
			closeModalFn();
		} catch (e) {
			dispatch(postDocumentError(e, formikActions))
			closeModalFn();			
		}
	}
};

export function postDocument(doc:documentType,formikActions:FormikHelpers<any>, closeModalFn:Function):thunkActionType{
	return async (dispatch) => {
		dispatch(postDocumentStart())
		try{
			const savedDocument = await Axios.post(
				'/documents.json', 
				{document:{...doc}}
			)

			dispatch(postDocumentOk(savedDocument.data, formikActions));
			closeModalFn();
		} catch (e) {
			dispatch(postDocumentError(e, formikActions))
			closeModalFn();			
		}
	}
};

function postDocumentStart():{type:actionsTypesType} {
	return {
		type: POST_DOCUMENT_START
	}
}

function postDocumentOk(document:documentType, formikActions:FormikHelpers<any>):{type:actionsTypesType, documents:Array<documentType>} {
	formikActions.setSubmitting(false)	
	return({
		type: POST_DOCUMENT_OK,
		documents: [document]
	})	
}

function postDocumentError(error:string, formikActions:FormikHelpers<any>):{type:actionsTypesType, error:string} {
	console.log('[postDocumentError error]', error);
	formikActions.setSubmitting(false)	
	return({
		type: POST_DOCUMENT_ERROR,
		error
	})	
}

export function resetDocuments():{type:actionsTypesType}{
	return({
    type: RESET_DOCUMENTS
	})
}

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
