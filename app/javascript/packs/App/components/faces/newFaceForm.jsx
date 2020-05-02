import React from 'react';
import PT from 'prop-types';

import { Formik, Form } from 'formik'

import Input from '../../UI/input';
import Loader from '../../UI/loader';


import classes from './newFaceForm.module.scss';

const NewFaceForm = () => {
  
	return (
		<div className="newFaceForm">
			<Formik
				initialValues={{ 
					code: '',
					name: '',
					note:'',
					is_fiz: false,
					is_rezident: true
				}}
				// onSubmit={(faceValues, actions) => {
				// 	dispatch(postDocument(faceValues, actions, closeModalFn))
				// }}
				onSubmit = { (f, a) => console.log('[f, a]', f, a)}
			>
				{ ({isSubmitting, handleChange, values}) =>(
					<Form>
						<Input
							label= 'Код (ЄДР/ІНН)'
							name = 'code'
							type = 'text'                
							groupClassName="col-12"							
							disabled={isSubmitting}
							autoComplete = 'off'

						/>
						<Input
							label= 'Назва / ПІБ'
							name = 'name'
							type = 'text'                
							groupClassName="col-12"							
							disabled={isSubmitting}
							autoComplete = 'off'
						/>
						<Input
							label= 'Примітки'
							name = 'note'
							type = 'text'                
							groupClassName="col-12"							
							disabled={isSubmitting}
							autoComplete = 'off'
						/>
						<Input
							label= 'Фізична особа?'
							name = 'is_fiz'
							type = 'checkbox' 
							groupClassName="col-12"							
							disabled={isSubmitting}
							inputClassName = 'col-1'
						/>
						<Input
							label= 'Резидент?'
							name = 'is_rezident'
							type = 'checkbox' 
							groupClassName="col-12"							
							disabled={isSubmitting}
							inputClassName = 'col-1'
						/>                
						<button 
							type="Submit" 
							className='btn btn-outline-primary m-1 ml-3' 
							disabled={isSubmitting}
						>
							Зберегти
						</button>
						<Loader isLoading={isSubmitting}/>
						
					</Form>
				)}
			</Formik>
		</div>
	);
};

NewFaceForm.propTypes = {
	closeModalFn: PT.func
};

export default NewFaceForm;
