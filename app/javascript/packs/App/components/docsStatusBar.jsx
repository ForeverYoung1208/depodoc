import React from 'react'
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {fetchDocuments} from '../store/actions/documents'
import ButtonRefresh from '../UI/buttonRefresh'
import {redirectToNewDocModal} from '../routes'
import classes from './docsStatusBar.module.css'

export default function DocStatusBar(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	return(
		<div>
			<ButtonRefresh
				onClick={() => dispatch(fetchDocuments())}
			>
			</ButtonRefresh>

			{/* <Link to='documentsApp/add'> */}
				<button 
					className='btn btn-outline-primary m-1 ml-3'
					onClick={ ()=>redirectToNewDocModal(history) }
				>
					<i className="fas fa-plus"></i>
				</button>
			{/* </Link> */}

		</div>

		

	)
}