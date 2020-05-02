import React from 'react'
import PT, { oneOf, object, array } from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './input.module.css'


export default function Input(props){

	const {children, name, label, groupClassName, inputClassName, ...otherProps} = props
	return(
		<div className={"input-group mb-3 " + (groupClassName||'')} >
			<div className="input-group-prepend ">
	    	<label className={classes['label']+" input-group-text"} htmlFor={name}>
	    		{label}
	    	</label>
	  	</div>
	    <Field
				name={name}
				className = {'col ' + (inputClassName||'')}
	    	{...otherProps}
	    >
	    	{children}
	    </Field>
			<ErrorMessage name={name}>
				{msg => <div className={classes['errorMessage']}> {msg} </div>}
			</ErrorMessage>
	  </div>
	)
}
Input.propTypes = {
	children: PT.oneOfType([PT.object, PT.array]),
	name: PT.string,
	label: PT.string,
	groupClassName: PT.string,
	inputClassName: PT.string

};