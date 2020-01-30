import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocForm.module.css'
import Loader from '../UI/loader'
import Input from '../UI/input'

export default function NewDocForm(props){

	function validatePresense(value) {
	  let error
	  if (!value) {
	    error = 'Required';
	  }
	  return error;
	}

	return(
	  <div>
	    <Formik
	      initialValues={{ 
	      	doctype:'',
	      	docname: '',
	      	face:'',
	      	note:''
				}}
	      onSubmit={(values, actions) => {
	      	setTimeout(()=> {
	      		alert('submitted! '+ values.docname )
	      		actions.setSubmitting(false)
	          console.log(values, actions)
	      	}, 2000 )
        }}
	    >
	      { ({isSubmitting}) => (


	        <Form>
	        	<Input
		          as='select'
		          label='Тип докуента'
		          type='text'
	            className='custom-select col-md-3'
	            name="doctype"
	            disabled={isSubmitting}
		        >
	          	 	<option value="1">1</option>
		          	<option value="2">2</option>
	          </Input>

	          <Input
	            type="text"
	            label="Назва документа"
	            name="docname"
	            validate={validatePresense} 
	            disabled={isSubmitting}
	          />
	        	
	          <Input
	          	label="Належить особі"
	            type="text"
	            name="face"
	            disabled={isSubmitting}
	          />

						<Input
	            type="text"
	            name="note"
	            label="Примітки"
	            validate={validatePresense} 
	            disabled={isSubmitting}
	          >
						</Input>
       	

	          <button 
	          	type="submit" 
	          	className='btn btn-outline-primary m-1 ml-3' 
	          	disabled={isSubmitting}
	          >
	          	Submit
	          </button>
	          <Loader isLoading={isSubmitting}/>
	        </Form>
	      )}
	    </Formik>
	  </div>





	)
}
