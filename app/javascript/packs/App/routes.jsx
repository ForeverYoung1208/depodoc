import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Documents from './pages/documents'
import Operations from './pages/operations'

export const useRoutes = () => {
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