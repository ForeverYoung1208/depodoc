import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './input.module.css'

export default function Input(props){

	const {children, name, label, ...otherProps} = props
	return(
		<div className="input-group mb-3">
			<div className="input-group-prepend">
	    	<label className={classes['label']+" input-group-text"} htmlFor={name}>
	    		{label}
	    	</label>
	  	</div>
	    <Field
	      name={name}
	    	{...otherProps}
	    >
	    	{children}
	    </Field>
      <ErrorMessage name={name}/>
	  </div>
	)
}
