import React from 'react'
import Axios from 'axios'
import {FETCH_DOCUMENTS, RESET_DOCUMENTS, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_ERROR,
	POST_DOCUMENT_START, POST_DOCUMENT_OK
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

export function postDocument(doc){
	return async (dispatch) => {
		dispatch(postDocumentStart())
		try{
			const csrfToken = document.getElementsByName("csrf-token")[0].getAttribute('content');	

			const savedDocument = await Axios.post(
				'/documents.json', 
				{document:{...doc}},   
				{headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': csrfToken
			}})
			console.log('[savedDocument]', savedDocument.data);

			dispatch(postDocumentOk(savedDocument.data));
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

export function postDocumentOk(document) {
	console.log('[postDocumentOk document]', document);
	return({
	type: POST_DOCUMENT_OK,
	document
	})	
}


export function resetDocuments(){
	return({
    type: RESET_DOCUMENTS
	})
};