import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import classes from './documents.module.css'

import Document from '../components/document.jsx'
import {fetchDocuments} from '../store/actions/documents'

export default function DocumentsList() {

  const dispatch = useDispatch();	
  const documents = useSelector(state => state.documents);
	
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
				  	{documents.map((document)=> 
				  		<Document 
				  			key={document.id} 
				  			document={document}
				  		/> 
				  	)}
					</tbody>
				</table>
		  	<button>reset</button>
		  	<button onClick = {()=>dispatch(fetchDocuments)}>get_documents</button>
	  	</div>
	  </React.Fragment>
  )
}
