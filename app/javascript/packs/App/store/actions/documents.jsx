import React from 'react'
import Axios from 'axios'
import {RESET_DOCUMENTS, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_ERROR,
	POST_DOCUMENT_START, POST_DOCUMENT_OK, POST_DOCUMENT_ERROR
} from './actionTypes';

export function fetchDocuments(){
	return async (dispatch) => {
		dispatch(fetchDocumentsStart())
		try{
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


export function postDocument(docId, oldStateId, newStateId, formikActions, closeModalFn){
	return async (dispatch) => {
		dispatch(postDocumentStart())
		try{
			const csrfToken = document.getElementsByName("csrf-token")[0].getAttribute('content');	
			const response = await Axios.post(
				`/documents/${docId}/add_state.json`, 
				{
					oldStateId, 
					newStateId
				},   
				{headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': csrfToken
			}})
			console.log('[response]', response)
			dispatch(postDocumentOk(response.data, formikActions));
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

export function postDocumentOk(response, formikActions) {
	console.log('[postDocumentOk response]', response);
	formikActions.setSubmitting(false)	

	return({
	type: POST_DOCUMENT_OK,
	// document
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