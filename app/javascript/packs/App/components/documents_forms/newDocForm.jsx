import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocForm.module.css'
import Loader from '../../UI/loader'
import Input from '../../UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { postDocument } from '../../store/actions/documents'

export default function NewDocForm(props){
	const {closeModalFn} = props
	const dispatch = useDispatch()
	const { doctypes, faces } = useSelector(state => state.voc)
	

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
	      	doctype_id: doctypes[0].id,
	      	name: '',
	      	face_id: faces[0].id,
	      	note:''
				}}
	      onSubmit={(documentValues, actions) => {
					dispatch(postDocument(documentValues, actions, closeModalFn))
        }}
	    >
	      { ({isSubmitting, handleChange, values}) => (


	        <Form>
	        	<Input
		          as='select'
		          label='Тип докуента'
		          type='text'
	            className='custom-select col-6'
	            validate={validatePresense} 
	            name="doctype_id"
							disabled={isSubmitting}
		        >
								{doctypes.map( doctype => 
									<option key={doctype.id} value={doctype.id}>{'(id '+doctype.id + '): ' +doctype.name}</option>
								)}
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
		          as='select'
	          	label="Належить особі"
	            type="text"
							className='custom-select col-6'
							name="face_id"
							disabled={isSubmitting}
							validate={validatePresense} 
	          >
							{faces.map( face => 
								<option key={face.id} value={face.id}>{'(id '+face.id + '): ' +face.name}</option>
							)}
	          </Input>							

						<Input
	            type="text"
	            name="note"
	            label="Примітки"
							className='col-6'
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
