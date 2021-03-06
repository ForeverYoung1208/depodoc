import React, {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Switch, Route, useHistory } from 'react-router-dom';

import {fetchDocuments} from '../store/actions/documents';

import {redirectToDocuments, redirectToNewDocModal, redirectToNewStateModal,
	NewDocModal_path,	NewStateModal_path, NewFaceModal_path
} from '../routes'

import classes from './documents.module.css';
import Modal from '../UI/modal';
import Loader from '../UI/loader';
import DocsStatusBar from '../components/docsStatusBar';
import Document from '../components/document';

import NewDocForm from '../components/documents_forms/newDocForm';
import NewDocStateForm from '../components/documents_forms/newDocStateForm';
import NewFaceForm from '../components/faces/newFaceForm';


export default function Documents() {

  const dispatch = useDispatch();	
  const {documents} = useSelector(state => state.documents)
	const {isLoading, fetchErrorText} = useSelector(state => state.documents)
	const history = useHistory();
	

  useEffect(()=> {
  	dispatch(fetchDocuments())
  },[] ) 
	
  return(
  	<React.Fragment>
  		<Loader isLoading={isLoading}/>
			<DocsStatusBar 
				errorText={fetchErrorText}
				showNewDocModal={ ()=> redirectToNewDocModal(history) }
			/>
  		<div className = "col-sm-12 p-0 pl-1">
				<table className = "table table-sm">
					<thead className = "thead-light">
						<tr className = {classes["doctable-headers"]}>
							<th>id</th>
							<th>Тип документу</th>
							<th>Назва</th>
							<th>В компанії</th>
							<th>По особі</th>
							<th>Теперішній стан</th>
							<th>В операціях</th>
							<th>Примітки Документа</th>
						</tr>
					</thead>
					<tbody>
				  	{fetchErrorText ? <tr className="alert alert-danger" role="alert"><td colSpan="7">{fetchErrorText}</td></tr>
				  		: documents.map((document)=> 
				  		<Document 
				  			key = {document.id} 
								document = {document}
								addNewStateModal = {()=>redirectToNewStateModal(history, document.id)}
				  		/> )
				  	}
					</tbody>
				</table>

				<Switch>
					<Route path={NewDocModal_path}>
						<Modal 
							closeModalFn={()=>redirectToDocuments(history)}
							caption='Новий документ'
						>
							<NewDocForm closeModalFn={()=>redirectToDocuments(history)}/>
						</Modal>
					</Route>

					<Route path={NewStateModal_path}>
						<Modal
							closeModalFn={()=>redirectToDocuments(history)}
							caption='Новий стан документа'
						>
							<NewDocStateForm closeModalFn={()=>redirectToDocuments(history)}/>
						</Modal>
					</Route>

				</Switch>



				
				
	  	</div>
	  </React.Fragment>
  )
}
