import React from 'react'
import classes from './buttonRefresh.module.css'

export default function ButtonRefresh(props) {
	return(
		<button 
			onClick={props.onClick} 
			className={classes['refresh-button'] + ' btn btn-outline-primary m-1'}
		>
			<i className="fas fa-sync"></i>
		</button>
	)
}