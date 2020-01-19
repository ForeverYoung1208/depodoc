import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {DocumentsList} from './pages/documents'

export const useRoutes = ()=>{
	return
	<Switch>
    <Route path="/documents"	>
      <Documents />
    </Route>
    <Redirect to="/" />
	</Switch>
}