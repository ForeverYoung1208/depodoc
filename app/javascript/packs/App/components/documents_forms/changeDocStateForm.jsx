import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './changeDocStateForm.module.css'
import Loader from '../../UI/loader'
import Input from '../../UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { postDocument } from '../../store/actions/documents'

export default function ChangeDocStateForm(params) {
  const {document} = params;
  
  const states = [{id:1, name:'name1'},{id:2, name:'name2'},{id:3, name:'name3'},]
  
  return ''


  // return(
  //   <div>
  //   <Formik
  //     initialValues={{ 
  //       document: document,
  //       state_id: 1,
  //       newstate_id: 1
  //     }}
  //     onSubmit={(documentValues, actions) => {
  //       console.log('[submit]', );
  //       // dispatch(postDocument(documentValues, actions, closeModalFn))
  //     }}
  //   >
  //     { ({isSubmitting, handleChange, values}) => (

  //       <Form>
  //         <h2>{values.document}</h2>
  //         <Input
  //           as='select'
  //           label='Тип докуента'
  //           type='text'
  //           className='custom-select col-6'
  //           validate={validatePresense} 
  //           name="state_id"
  //           disabled={isSubmitting}
  //         >
  //             {states.map( state => 
  //               <option key={state.id} value={state.id}>{'(id '+state.id + '): ' +state.name}</option>
  //             )}
  //         </Input>

  //         <Input
  //           as='select'
  //           label='Тип докуента'
  //           type='text'
  //           className='custom-select col-6'
  //           validate={validatePresense} 
  //           name="state_id"
  //           disabled={isSubmitting}
  //         >
  //             {states.map( state => 
  //               <option key={state.id} value={state.id}>{'(id '+state.id + '): ' +state.name}</option>
  //             )}
  //         </Input>
          
  //         <button 
  //           type="submit" 
  //           className='btn btn-outline-primary m-1 ml-3' 
  //           disabled={isSubmitting}
  //         >
  //           Submit
  //         </button>
  //         <Loader isLoading={isSubmitting}/>
  //       </Form>
  //     )}
  //   </Formik>
  // </div>
    
  // )
}