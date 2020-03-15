import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocStateForm.module.css'
import Loader from '../../UI/loader'
import Input from '../../UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { postStateChange } from '../../store/actions/documents'
import { useParams } from 'react-router-dom'
import useDocument from '../../hooks/useDocument'
import DocumentInfo from '../documentInfo'

export default function NewDocStateForm(props) {
  const {closeModalFn} = props   
  const dispatch = useDispatch()
  const {id:documentId} = useParams() //from router (url)
  const document = useDocument(documentId)
  const {docstates} = useSelector( state => state.voc )
  const emptyDocument = {
    id:'', doctype:'', name:'', note:'', face:'', last_docstate:{id:'', name:''}
  }
  

  return(
  <div>
    <Formik
      initialValues={{ 
        document: document,
        newState_id: 1
      }}
      onSubmit={(values, actions) => {
        dispatch(postStateChange(values.document.id, +document.last_docstate.id, +values.newState_id, actions, closeModalFn))
      }}
    >
      { ({isSubmitting, handleChange, values}) => (

        <Form>
          <DocumentInfo document={values.document ? values.document : emptyDocument}></DocumentInfo>
          <Input
            as='select'
            label='Новий стан:'
            type='text'
            className='custom-select col-6'
            name="newState_id"
            disabled={isSubmitting}
          >
              {docstates.map( state => 
                <option key={state.id} value={state.id}>{state.name + '(id '+state.id + ')'}</option>
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