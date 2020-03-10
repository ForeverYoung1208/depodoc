import React from 'react'
import {Link} from 'react-router-dom'
import classes from './document.module.css'

function DocStateControls(props){
	const {document, addNewStateModal} = props
	return(
		<React.Fragment>
			{document.last_docstate && 
				<button 
					className={classes['doc-btn-info'] +' btn btn-outline-info btn-sm p-0'}
					onClick={() => console.log('doc history click', document.id)}
				>
					{document.last_docstate.name}
				</button>
			}

			<button
				className={classes['doc-btn-proceed'] +' btn btn-outline-primary btn-sm p-0'}
				onClick={()=>addNewStateModal()}
			>
				<i className="fas fa-angle-double-right"></i>				
				
			</button>

		</React.Fragment>
	)
}



export default function Document(props){
	const {document, addNewStateModal} = props
	return(
		<tr>
			<td className={classes['col-id']}>{document.id}</td>
			<td>{document.doctype}</td>
			<td>{document.name}</td>
			<td>{document.companies.map( cmp => <span key={cmp.id}> {cmp.name}</span>)}	</td>
			<td>{document.face.name}</td>
			<td><DocStateControls document={document} addNewStateModal={addNewStateModal} />	</td>
			<td>{document.operations.map( op => (
						<Link to={`/operations/${op.id}`} key={op.id}> 
							{op.name}
						</Link>)
					)}	
			</td>
			<td>{document.note}, ({document.updated_at})</td>
		</tr> 
	)
}
