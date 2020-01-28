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
	      initialValues={{ 
	      	doctype:'',
	      	name: '',
	      	face:'',
	      	note:''
	      	 }}
	      onSubmit={(values, actions) => {
		      	setTimeout(()=> {
		      		alert('submitted! '+ values.name )
		      		actions.setSubmitting(false)
		          console.log(values, actions)
		      	}, 2000 )
	        }
	      }
	    >
	      { ({isSubmitting}) => (
	        <Form>

	        	<label htmlFor="doctype">Тип докуента</label>
	          <Field
	            type="text"
	            name="doctype"
	            validate={validateName1} 
	            disabled={isSubmitting}
	          />
	          <ErrorMessage name='doctype'>	{msg => <div>{'ERROR: ' + msg}</div>} </ErrorMessage>

	        	<label htmlFor="name">Назва документа</label>
	          <Field
	            type="text"
	            name="name"
	            validate={validateName1} 
	            disabled={isSubmitting}
	          />
	          <ErrorMessage name='name'>	{msg => <div>{'ERROR: ' + msg}</div>} </ErrorMessage>

	        	<label htmlFor="face">Належить особі</label>
	          <Field
	            type="text"
	            name="face"
	            validate={validateName1} 
	            disabled={isSubmitting}
	          />
	          <ErrorMessage name='face'>	{msg => <div>{'ERROR: ' + msg}</div>} </ErrorMessage>

	        	<label htmlFor="note">Примітки</label>
	          <Field
	            type="text"
	            name="note"
	            validate={validateName1} 
	            disabled={isSubmitting}
	          />
	          <ErrorMessage name='note'>	{msg => <div>{'ERROR: ' + msg}</div>} </ErrorMessage>




	          <button type="submit" disabled={isSubmitting}>Submit</button>
	          <Loader isLoading={isSubmitting}/>
	        </Form>
	      )}
	    </Formik>
	  </div>





	)
}
