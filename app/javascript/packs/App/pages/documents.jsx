import React, {useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux";


import classes from './documents.module.css'
import Loader from '../UI/loader'
import DocsStatusBar from '../components/docsStatusBar'
import {fetchDocuments, resetDocuments} from '../store/actions/documents'
import Document from '../components/document';

export default function Documents() {

  const dispatch = useDispatch();	
  const {documents} = useSelector(state => state.documents)
  const {isLoading, fetchErrorText} = useSelector(state => state.documents)

  useEffect(()=> {
  	dispatch(fetchDocuments())
  },[] ) 
	
  return(
  	<React.Fragment>
  		<Loader isLoading={isLoading}/>
  		<DocsStatusBar errorText={fetchErrorText}/>
  		<div className="col-sm-12 p-0 pl-1">
				<table className="table table-sm">
					<thead className="thead-light">
						<tr className={classes["doctable-headers"]}>
							<th>id</th>
							<th>Тип документа</th>
							<th>В компании</th>
							<th>По лицу</th>
							<th>Текущее состояние</th>
							<th>В операциях</th>
							<th>Примечаия</th>
						</tr>
					</thead>
					<tbody>
				  	{fetchErrorText ? <tr className="alert alert-danger" role="alert"><td colSpan="7">{fetchErrorText}</td></tr>
				  		: documents.map((document)=> 
				  		<Document 
				  			key={document.id} 
				  			document={document}
				  		/> )
				  	}
					</tbody>
				</table>
	  	</div>
	  </React.Fragment>
  )
}
