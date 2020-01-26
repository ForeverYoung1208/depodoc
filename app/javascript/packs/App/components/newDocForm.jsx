import React from 'react'
import { Formik } from 'formik'
import classes from './newDocForm.module.css'

export default function NewDocForm(props){



	return(
	  <div>
	    <Formik
	      initialValues={{ name: 'jared' }}
	      onSubmit={(values, actions) => {
	        setTimeout(() => {
	          console.log(values, actions)
	          actions.setSubmitting(false);
	        }, 1000);
	      }}
	    >
	      {props => (
	        <form onSubmit={props.handleSubmit}>
	        	<label htmlFor="name1">input1</label>
	          <input
	            type="text"
	            onChange={props.handleChange}
	            onBlur={props.handleBlur}
	            value={props.values.name}
	            name="name1"
	          />
	          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
	          <button type="submit">Submit</button>
	        </form>
	      )}
	    </Formik>
	  </div>





	)
}
