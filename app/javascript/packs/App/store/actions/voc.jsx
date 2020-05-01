import React from 'react'
import Axios from 'axios'
import {FETCH_VOC_START, FETCH_VOC_OK, FETCH_VOC_ERROR,	
} from './actionTypes';

export function fetchVoc(){
  let doctypes=[], faces=[], docstates=[]
	return async (dispatch) => {
		dispatch(fetchVocStart())
		try{
      Axios.all([
        Axios.get('/doctypes.json'),
        Axios.get('/faces.json'),
        Axios.get('/docstates.json')
      ]).then((response)=>{
        doctypes = response[0].data
        faces = response[1].data
        docstates = response[2].data
        dispatch(fetchVocOk({doctypes, faces, docstates}))
      })
			
		} catch (e) {
			console.log('fetchVoc error---:', e)	
			dispatch(fetchVocError(e))
		}
	}
};

function fetchVocStart(){
	return {
		type: FETCH_VOC_START
	}  
}
function fetchVocOk(voc){
	return {
    type: FETCH_VOC_OK,
    voc
	}    
}
function fetchVocError(error){
	return {
    type: FETCH_VOC_ERROR,
    error
	}    
}