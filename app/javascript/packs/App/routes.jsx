import React, {useEffect} from 'react'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import Documents from './pages/documents'
import Operations from './pages/operations'

import { useDispatch, useSelector} from "react-redux";
import { fetchVoc } from './store/actions/voc'


export const MainRoutes = () => {
		
	// 
	const dispatch = useDispatch();
  useEffect(()=> {
  	dispatch(fetchVoc())
  },[] )
	
	return (
		<Switch>
	    <Route path="/documentsApp"	>
	      <Documents />
	    </Route>
	    <Route path="/operations"	>
	      <Operations />
	    </Route>
	    <Redirect to="/" />
		</Switch>
	)
}

export const NewStateModal_path = '/documentsApp/:id/new_state'
export function redirectToNewStateModal(history, documentId) {
	const NewStateModal_path_actual = NewStateModal_path.replace(':id', documentId)
	history.push(NewStateModal_path_actual)
}

export const NewDocModal_path = '/documentsApp/add'
export function redirectToNewDocModal(history) {
	history.push(NewDocModal_path)
}

export function redirectToDocuments(history) {
	history.push('/documentsApp');
}

// -----------------------
export const NewFaceModal_path = '/documentsApp/face/add'
export function redirectToNewFaceModal(history) {
	history.push(NewFaceModal_path)
}