import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import classes from './documents.module.css'
import Loader from '../components/loader'


import {fetchDocuments, resetDocuments} from '../store/actions/documents'
import Document from '../components/document';

export default function DocumentsList() {

  const dispatch = useDispatch();	
  const {documents} = useSelector(state => state.documents);
  const isLoading = useSelector(state => state.documents.isLoading);
	
  return(
  	<React.Fragment>
  		<Loader isLoading={isLoading}/>
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
		  	<button onClick={() => dispatch(resetDocuments())}>reset</button>
		  	<button onClick={() => dispatch(fetchDocuments())}>get_documents</button>
	  	</div>
	  </React.Fragment>
  )
}
