import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const DocumentsApp = props => (
  <div>Hello {props.name}!</div>
)

DocumentsApp.defaultProps = {
  name: 'Documents'
}

DocumentsApp.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {	
	ReactDOM.render(
		<DocumentsApp/>,
    // document.body.appendChild(document.createElement('div'))
		document.getElementById('documents-app'),
	)
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