import React from 'react'
import Axios from 'axios'
import {FETCH_DOCUMENTS, RESET_DOCUMENTS, FETCH_DOCUMENTS_START, FETCH_DOCUMENTS_OK, FETCH_DOCUMENTS_ERROR} from './actionTypes';


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
	return async(dispatch) => {
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


export function resetDocuments(){
	return({
    type: RESET_DOCUMENTS
	})
};