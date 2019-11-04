import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Documents from './documents'

const fake_documents = [
	{
		id:1,
		name: 'fdoc1'
	},
	{
		id:2,
		name: 'fdoc2'
	},
]

export const AppContext = React.createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'get_documents':
      return { documents: fake_documents };

    case 'increment':
      return { count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error('unknown reducer action');
  }
}




const DocumentsApp = props => (
	<AppContext.Provider value = {appReducer}>
	  <Documents></Documents>
  </AppContext.Provider>
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