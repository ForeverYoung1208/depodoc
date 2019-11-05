import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Documents from './documents'
import {documentsReducer} from './documents_reducer'

export const DocumentsContext = React.createContext();


const DocumentsApp = props => (
	<DocumentsContext.Provider value = {documentsReducer}>
	  <Documents></Documents>
  </DocumentsContext.Provider>
)


document.addEventListener('DOMContentLoaded', () => {	
	ReactDOM.render(	<DocumentsApp/>, document.getElementById('documents-app') )
})


// document.onreadystatechange = () => {
//   if (document.readyState === "interactive") {
//   	const app = document.getElementById('documents-app')
//   	if (app){
// 			ReactDOM.render(
// 				<DocumentsApp/>,
// 		    // document.body.appendChild(document.createElement('div'))
// 				app,
// 			)
//   	}
//   }
// }