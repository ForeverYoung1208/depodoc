import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocForm.module.css'
import Loader from '../UI/loader'

export default function NewDocForm(props){

	function validateName1(value) {
	  let error;
	  if (!value) {
	    error = 'Required';
	  } else if (value.length && value.length>10) {
	    error = 'too long (need to be less than 10)';
	  }
	  return error;
	}

	return(
	  <div>
	    <Formik
	      initialValues={{ name1: 'jared' }}
	      onSubmit={(values, actions) => {
		      	setTimeout(()=> {
		      		alert('submitted! '+ values.name1 )
		      		actions.setSubmitting(false)
		          console.log(values, actions)
		      	}, 3000 )
	        }
	      }
	    >
	      { ({isSubmitting}) => (
	        <Form>
	        	<label htmlFor="name1">input1</label>
	          <Field
	            type="text"
	            name="name1"
	            validate={validateName1} 
	            disabled={isSubmitting}
	          />
	          <ErrorMessage name='name1'>
	          	{msg => <div>{'ERROR: ' + msg}</div>}
	          </ErrorMessage>
	          <button type="submit" disabled={isSubmitting}>Submit</button>
	          <Loader isLoading={isSubmitting}/>
	        </Form>
	      )}
	    </Formik>
	  </div>





	)
}
