import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocStateForm.module.css'
import Loader from '../../UI/loader'
import Input from '../../UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { postDocument } from '../../store/actions/documents'
import { useParams } from 'react-router-dom'
import useDocument from '../../hooks/useDocument'

export default function NewDocStateForm() {
  
  const {id:documentId} = useParams()
  const document = useDocument(documentId)
  const {docstates} = useSelector( state => state.voc )
  
  // return `Document ${document.id}`


  return(
  <div>
    <Formik
      initialValues={{ 
        document: document,
        newstate_id: 1
      }}
      onSubmit={(documentValues, actions) => {
        console.log('[submit documentValues]', documentValues );
        // dispatch(postDocument(documentValues, actions, closeModalFn))
      }}
    >
      { ({isSubmitting, handleChange, values}) => (

        <Form>
          { !values.document ? null : `
            ${values.document.id}
            ${values.document.doctype}
            ${values.document.name}
            ${values.document.note}
            ${values.document.face.name}
            ${values.document.last_docstate.name} (${values.document.last_docstate.id})
          `}

          <Input
            as='select'
            label='Новий стан:'
            type='text'
            className='custom-select col-6'
            name="new_state_id"
            disabled={isSubmitting}
          >
              {docstates.map( state => 
                <option key={state.id} value={state.id}>{'(id '+state.id + '): ' +state.name}</option>
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