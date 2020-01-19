import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Documents from './pages/documents'

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useRoutes} from './routes'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'


const routes = useRoutes()
console.log(routes)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


const DocumentsApp = props => (
	<React.Fragment>
		<Provider store={store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
		</Provider>
	</React.Fragment>
)


document.addEventListener('DOMContentLoaded', () => {	
	ReactDOM.render(	<DocumentsApp/>, document.getElementById('documents-app') )
})