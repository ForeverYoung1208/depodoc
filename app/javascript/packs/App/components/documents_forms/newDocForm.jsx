import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik, useFormikContext } from 'formik'
import classes from './newDocForm.module.css'
import Loader from '../../UI/loader'
import Input from '../../UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { postDocument } from '../../store/actions/documents'
import { STARTING_DOCSTATE_IDS } from '../../global_constatns'

export default function NewDocForm(props){
	const {closeModalFn} = props
	const dispatch = useDispatch()
	const { doctypes, faces, docstates } = useSelector(state => state.voc)
	const startingDocstates = docstates.filter(ds => STARTING_DOCSTATE_IDS.includes(ds.id) )
	const complexDoctypeIds = doctypes.map(doctype => doctype.isComplex ? doctype.id : null )

	
	
	function validatePresense(value) {
		if (!value) {
			return 'Потрібно ввести ідентиіфкатор документу';
		}
	}
	
	function validateForm(values) {
		const errors = {};

		if (values.note==='' && + complexDoctypeIds.includes(+values.doctype_id)){ /////////////////////////////////////////HARDCODED!!!!
			errors.note = 'Тип документу передбачає зазначення його складових!'
		}
		return errors;
	}
	
	return(
		<div>
			<Formik
				initialValues={{ 
					doctype_id: doctypes[0].id,
					name: '',
					face_id: faces[0].id,
					note:'',
					docstate_id: docstates[0].id || 0
				}}
				onSubmit={(documentValues, actions) => {
					dispatch(postDocument(documentValues, actions, closeModalFn))
				}}
				validate = {validateForm}
			>
				{ ({isSubmitting, handleChange, values}) => (


					<Form>
						<Input
							as='select'
							label='Тип докуента'
							type='text'
							className='custom-select col-8'
							name="doctype_id"
							disabled={isSubmitting}
						>
								{doctypes.map( doctype => 
									<option key={doctype.id} value={doctype.id}>
										{ `id ${doctype.id}): ${doctype.name} ${doctype.isComplex ? '- Пакет документів':''}` }
									</option>
								)}
						</Input>

						<Input
							type="text"
							label="Назва документа"
							name="name"
							className='col-8'
							validate={validatePresense} 
							disabled={isSubmitting}
						/>

						<Input
							type="text"
							name="note"
							label="Примітки"
							className='col-8'
							disabled={isSubmitting}
						>
						</Input>

						<Input
							as='select'
							label="Належить особі"
							type="text"
							className='custom-select col-8'
							name="face_id"
							disabled={isSubmitting}
						>
							{faces.map( face => 
								<option key={face.id} value={face.id}>{'(id '+face.id + '): ' +face.name}</option>
							)}
						</Input>							



						<Input
							as='select'
							label="Початковий стан"
							type="text"
							className='custom-select col-8'
							name="docstate_id"
							disabled={isSubmitting}
						>
							{startingDocstates.map( docstate => 
								<option key={docstate.id} value={docstate.id}>{'(id '+docstate.id + '): ' +docstate.name}</option>
							)}
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
