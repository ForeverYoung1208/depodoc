import React, { useContext, useReducer, useEffect } from 'react'
import {DocumentsContext} from './documents_app'
import classes from './documents.module.css'


function Document(props){
	console.log(props)
	return(
		<tr>
			<td>{props.document.id}</td>
			<td>{props.document.name}</td>
			<td>{props.document.face_id}</td>
			<td>{props.document.note}</td>
			<td>{props.document.created_at}</td>
			<td>{props.document.updated_at}</td>
		</tr>
	)
}

export default function Documents() {
	const docReducer = useContext(DocumentsContext);
	const [state, dispatch] = useReducer(docReducer, {documents: []})
	
  return(
  	<React.Fragment>
  		<h1 className={classes['test-styles']}> test styles</h1>
  		<div className="col-sm-12 p-2">
				<table className="table table-sm">
					<thead className="thead-light">
						<tr>
							<th>id</th>
							<th>name</th>
							<th>face_id</th>
							<th>note</th>
							<th>created_at</th>
							<th>updated_at</th>
						</tr>
					</thead>
					<tbody>
				  	{state.documents.map((document)=> 
				  		<Document 
				  			key={document.id} 
				  			document={document}
				  		/> 
				  	)}
					</tbody>
				</table>
		  	<button onClick = {()=>dispatch({type: 'reset', payload:'some reset value'})}>reset</button>
		  	<button onClick = {()=>dispatch({type: 'get_documents'})}>get_documents</button>
	  	</div>
	  </React.Fragment>
  )
}
