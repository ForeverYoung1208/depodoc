import React from 'react'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import Documents from './pages/documents'
import Operations from './pages/operations'

export const useMainRoutes = () => {
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