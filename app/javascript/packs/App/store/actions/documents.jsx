import React from 'react'
import Axios from '../../axios/customAxios'
import {RESET_DOCUMENTS, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_ERROR,
	POST_DOCUMENT_START, POST_DOCUMENT_OK, POST_DOCUMENT_ERROR
} from './actionTypes';

export function fetchDocuments(){
	// return async (dispatch, getState) => {     //its possible to access store from thunk's action but it is bad practice
	return async (dispatch) => {
		dispatch(fetchDocumentsStart())

		try{
			console.log('[getState()]', getState());
			const documents = await Axios.get('/documents.json').then(res=> res.data)
			dispatch(fetchDocumentsOk(documents))
		} catch (e) {
			console.log('fetchDocuments error---:', e)	
			dispatch(fetchDocumentsError(e))
		}
	}
};

function fetchDocumentsStart() {
	return({
		type: FETCH_DOCUMENTS_START
	})
}

function fetchDocumentsOk(documents){
	return({
    type: FETCH_DOCUMENTS_OK,
    documents
	})
}

function fetchDocumentsError(error){
	return({
    type: FETCH_DOCUMENTS_ERROR,
    error
	})
}


export function postStateChange(docId, oldStateId, newStateId, note, formikActions, closeModalFn){
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


export function postDocument(doc,formikActions,closeModalFn){
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



export function postDocumentStart() {
	return {
		type: POST_DOCUMENT_START
	}
}

export function postDocumentOk(document, formikActions) {
	console.log('[postDocumentOk document]', document);

	formikActions.setSubmitting(false)	

	return({
	type: POST_DOCUMENT_OK,
	document
	})	
}

export function postDocumentError(error, formikActions) {
	console.log('[postDocumentError error]', error);
	formikActions.setSubmitting(false)	

	return({
	type: POST_DOCUMENT_ERROR,
	error
	})	
}


export function resetDocuments(){
	return({
    type: RESET_DOCUMENTS
	})
};