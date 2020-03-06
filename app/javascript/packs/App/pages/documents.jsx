import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux";
import Modal from '../UI/modal'


import classes from './documents.module.css'
import Loader from '../UI/loader'
import DocsStatusBar from '../components/docsStatusBar'
import {fetchDocuments, resetDocuments} from '../store/actions/documents'

import Document from '../components/document';
import NewDocForm from '../components/documents_forms/newDocForm'
import NewStateForm from '../components/documents_forms/changeDocStateForm'


export default function Documents() {

  const dispatch = useDispatch();	
  const {documents} = useSelector(state => state.documents)
	const {isLoading, fetchErrorText} = useSelector(state => state.documents)
	
	const [isStateModalShowing, setIsStateModalShowing] = useState(false)
  const [isNewDocShowing, setIsNewDocShowing]=useState(false)

  useEffect(()=> {
  	dispatch(fetchDocuments())
  },[] ) 
	
  return(
  	<React.Fragment>
  		<Loader isLoading={isLoading}/>
			<DocsStatusBar 
				errorText={fetchErrorText}
				showNewDocModal={ ()=> setIsNewDocShowing(true) }
			/>
  		<div className = "col-sm-12 p-0 pl-1">
				<table className = "table table-sm">
					<thead className = "thead-light">
						<tr className = {classes["doctable-headers"]}>
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
				  			key = {document.id} 
								document = {document}
								showNewStateModal = {()=>setIsStateModalShowing(true)}
				  		/> )
				  	}
					</tbody>
				</table>

				<Modal 
					isModalShowing={isNewDocShowing} 
					setIsModalShowing={setIsNewDocShowing} 
					caption='Новий документ'>
						<NewDocForm closeModalFn={()=>setIsNewDocShowing(false)}/>
				</Modal>


				<Modal 
					isModalShowing={isStateModalShowing} 
					setIsModalShowing={setIsStateModalShowing} 
					caption='Новий стан документа'>
						<NewStateForm closeModalFn={()=>setIsStateModalShowing(false)}/>
				</Modal>
				
				
	  	</div>
	  </React.Fragment>
  )
}
