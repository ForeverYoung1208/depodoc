import React from 'react'
import classes from './document.module.css'

export default function Document(props){
	const {document} = props
	return(
		<tr>
			<td>{document.id}</td>
			<td className={classes['test-styles']}>{document.name}</td>
			<td>{document.face_id}</td>
			<td>{document.note}</td>
			<td>{document.created_at}</td>
			<td>{document.updated_at}</td>
		</tr>
	)
}
