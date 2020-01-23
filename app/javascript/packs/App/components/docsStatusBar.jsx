import React from 'react'
import { useDispatch} from "react-redux";
import {fetchDocuments} from '../store/actions/documents'
import ButtonRefresh from '../UI/buttonRefresh'

export default function DocStatusBar(props) {
  const dispatch = useDispatch();	

	return(
		<div>
			<ButtonRefresh
				onClick={() => dispatch(fetchDocuments())}
			>
			</ButtonRefresh>
			<button 
				onClick={() => console.log('ADD button')} 
				className='btn btn-outline-primary m-1 ml-3'
			>
				<i className="fas fa-plus"></i>
			</button>
		</div>

	)
}