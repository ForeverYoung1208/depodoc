import React, { useContext, useReducer } from 'react'
import {AppContext} from './documents_app'



export default function Documents() {
	const appReducer = useContext(AppContext);
	const [state, dispatch] = useReducer(appReducer, {})
	
// ???????? doesn't work !!!!!!!!??????	

	dispatch({type: 'get_documents'})

//


  return(
  	<div>Documents will be here: {state.documents[0].name}</div>
  )
}
