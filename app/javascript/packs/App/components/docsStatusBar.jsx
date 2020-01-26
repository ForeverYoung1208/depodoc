import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {fetchDocuments} from '../store/actions/documents'
import ButtonRefresh from '../UI/buttonRefresh'
import Modal from '../UI/modal'

const NewDocFrom=()=><h1>NewDocFrom</h1>

export default function DocStatusBar(props) {
  const dispatch = useDispatch();
  const [isNewDocShowing, setIsNewDocShowing]=useState(false)

	return(
		<div>
			<ButtonRefresh
				onClick={() => dispatch(fetchDocuments())}
			>
			</ButtonRefresh>

			<button 
				onClick={() => setIsNewDocShowing(true)} 
				className='btn btn-outline-primary m-1 ml-3'
			>
				<i className="fas fa-plus"></i>
			</button>

			<Modal isModalShowing={isNewDocShowing} setIsModalShowing={setIsNewDocShowing}>
				<NewDocFrom/>
			</Modal>

		</div>

		

	)
}