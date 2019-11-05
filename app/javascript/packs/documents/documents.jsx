import React, { useContext, useReducer, useEffect } from 'react'
import {DocumentsContext} from './documents_app'


function Document(props){
	console.log(props)
	return props.document.name
}

export default function Documents() {
	const docReducer = useContext(DocumentsContext);
	const [state, dispatch] = useReducer(docReducer, {documents: []})
	

  return(
  	<React.Fragment>

	  	
	  	{  state.documents.map((document)=> 
	  		<Document 
	  			key={document.id} 
	  			document={document}
	  		/> 
	  	)}
	  	
	  	
	  	
	  	<button onClick = {()=>dispatch({type: 'reset', payload:'some reset value'})}>reset</button>
	  	<button onClick = {()=>dispatch({type: 'get_documents'})}>get_documents</button>
	  </React.Fragment>
  )
}
