import React from 'react'
import {FETCH_DOCUMENTS} from './actionTypes';


const fakeDocuments = [
	{
		"id":1,
		"name":"document1_name",
		"face_id":1,
		"note":"document1_note",
		"created_at":"2019-11-20T20:08:14.538Z",
		"updated_at":"2019-11-20T20:08:14.538Z"
	},
	{"id":2,"name":"document2_name","face_id":2,"note":"document2_note","created_at":"2019-11-20T20:08:14.545Z","updated_at":"2019-11-20T20:08:14.545Z"}
]



export function fetchDocuments(){
	return({
    type: FETCH_DOCUMENTS,
    documents: fakeDocuments
	})
};