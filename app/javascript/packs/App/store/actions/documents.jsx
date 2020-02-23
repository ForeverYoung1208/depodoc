import React from 'react'
import Axios from 'axios'
import {FETCH_DOCUMENTS, RESET_DOCUMENTS, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_ERROR,
	POST_DOCUMENT_START	
} from './actionTypes';


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

export function postDocument(document){
	return async (dispatch) => {
		dispatch(postDocumentStart())
		try{
			const token = getElementsByName("csrf-token")[0].getAttribute('content');	
			debugger

		

			const res = await Axios.post('/documents.json', document)// .then(res=> res.data)
			console.log('[res]', res);
			console.log('[document]', document);

			debugger;

			dispatch(postDocumentOk(res))
		} catch (e) {
			console.log('postDocuments error---:', e)	
			// dispatch(postDocumentsError(e))
		}
	}
};

export function postDocumentStart() {
	return {
		type: POST_DOCUMENT_START
	}
}

export function postDocumentOk(result) {
	console.log('[postDocumentOk result]', result);
	return({
    type: POST_DOCUMENT_OK
	})	
}


export function resetDocuments(){
	return({
    type: RESET_DOCUMENTS
	})
};