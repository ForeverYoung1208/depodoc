import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {fetchDocuments} from '../store/actions/documents'
import ButtonRefresh from '../UI/buttonRefresh'
// import Modal from '../UI/modal'
// import NewDocForm from './document/newDocForm'

export default function DocStatusBar(props) {
	const dispatch = useDispatch();
	const {showNewDocModal} = props;

	return(
		<div>
			<ButtonRefresh
				onClick={() => dispatch(fetchDocuments())}
			>
			</ButtonRefresh>

			<button 
				onClick={() => showNewDocModal()} 
				className='btn btn-outline-primary m-1 ml-3'
			>
				<i className="fas fa-plus"></i>
			</button>

		</div>

		

	)
}