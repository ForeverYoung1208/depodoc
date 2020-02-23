import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocForm.module.css'
import Loader from '../UI/loader'
import Input from '../UI/input'
import { useDispatch } from 'react-redux'
import { postDocument } from '../store/actions/documents'

export default function NewDocForm(props){

	const dispatch = useDispatch()

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
	      	doctype_id: '',
	      	name: '',
	      	face_id:'',
	      	note:''
				}}
	      onSubmit={(values, actions) => {
					
					dispatch(postDocument(values))
					actions.setSubmitting(false)
					// actions.setSubmitting(true)

					// setTimeout(()=> {
	      	// 	alert('submitted! '+ values.docname )
	      	// 	actions.setSubmitting(false)
	        //   console.og(values, actions)
					// }, 2000 )
					

        }}
	    >
	      { ({isSubmitting, handleChange, values}) => (


	        <Form>
	        	<Input
		          as='select'
		          label='Тип докуента'
		          type='text'
	            className='custom-select col-6'
	            name="doctype_id"
							disabled={isSubmitting}
							onChange={handleChange}
							value={values.firstName}								
		        >
	          	 	<option value="1">1</option>
		          	<option value="2">2</option>
	          </Input>

	          <Input
	            type="text"
	            label="Назва документа"
							name="name"
							className='col-6'
	            validate={validatePresense} 
	            disabled={isSubmitting}
	          />
	        	
	          <Input
	          	label="Належить особі"
	            type="text"
							className='col-6'
							name="face_id"
	            disabled={isSubmitting}
	          />

						<Input
	            type="text"
	            name="note"
	            label="Примітки"
							className='col-6'
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
