import React, {useEffect} from 'react'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import Documents from './pages/documents'
import Operations from './pages/operations'

import { useDispatch, useSelector} from "react-redux";
import { fetchVoc } from './store/actions/voc'

export const MainRoutes = () => {
	const dispatch = useDispatch();
  useEffect(()=> {
  	dispatch(fetchVoc())
  },[] )
	
	return (
		<Switch>
	    <Route path="/documents"	>
	      <Documents />
	    </Route>
	    <Route path="/operations"	>
	      <Operations />
	    </Route>
	    <Redirect to="/" />
		</Switch>
	)
}

export function redirectToNewStateModal(history, documentId) {
	history.push(`/documents/${documentId}/new_state`)
}

export function redirectToNewDocModal(history) {
	history.push('/documents/new')
}

export function redirectToDocuments(history) {
	history.push('/documents');
}