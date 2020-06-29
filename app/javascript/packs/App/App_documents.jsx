import React from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {MainRoutes} from './routes'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

ReactModal.setAppElement('#documents-app')

const composeEnhancers =
  typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose;

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
        <MainRoutes />
      </BrowserRouter>
		</Provider>
	</React.Fragment>
)


document.addEventListener('DOMContentLoaded', () => {	
	ReactDOM.render(	<DocumentsApp/>, document.getElementById('documents-app') )
})