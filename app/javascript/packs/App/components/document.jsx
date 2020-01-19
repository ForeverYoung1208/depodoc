import React from 'react'
import classes from './document.module.css'

export default function Document(props){
	const {document} = props
	return(
		<tr>
			<td className={classes['test-styles']}>{document.id}</td>
			<td>{document.name}</td>
			<td>{document.companies.map( cmp => <span key={cmp.id}> {cmp.name}</span>)}	</td>
			<td>{document.face.name}</td>
			<td>{document.last_docstate}
				<button>История</button>
			</td>
			<td>{document.operations.map( op => <span key={op.id}> {op.name}</span>)}	</td>
			<td>{document.note}, ({document.updated_at})</td>
		</tr> 
	)
}
