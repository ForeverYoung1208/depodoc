import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import classes from './newDocStateForm.module.css'
import Loader from '../../UI/loader'
import Input from '../../UI/input'
import { useDispatch, useSelector } from 'react-redux'
import { postStateChange } from '../../store/actions/documents'
import { useParams } from 'react-router-dom'
// import useDocument from '../../hooks/useDocument'
import DocumentInfo from '../documentInfo'
import {DOCUMENT_WORKED_OUT_ID} from '../../global_constatns'
import { getDocument } from '../../store/selectors/getDocument'

export default function NewDocStateForm(props) {
  const {closeModalFn} = props   
  const dispatch = useDispatch()
  const {id:documentId} = useParams() //from router (url)
  // const document = useDocument(documentId)
  const document = useSelector( state => getDocument(state, documentId) )


  const {docstates} = useSelector( state => state.voc )
  const emptyDocument = {
    id:'', doctype:'', name:'', note:'', face:'', last_docstate:{id:'', name:''}
  }

  const enabledDocstates = docstates.filter(docstate =>{
    return document.last_docstate.possible_changes.includes(docstate.id)|| docstate.id === document.last_docstate.id
  })

  return(
  <div>
    <Formik
      initialValues={{ 
        document: document,
        newState_id: document.last_docstate.id,
        note: ''
      }}
      onSubmit={(values, actions) => {
        

        dispatch(postStateChange(values.document.id, +document.last_docstate.id, +values.newState_id, values.note, actions, closeModalFn))
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
            onChange={(e)=> {
              e.target.value === DOCUMENT_WORKED_OUT_ID ? alert('буде помічено як відпрацьований! Стан таких документів більше змінювати неможливо.') : null;
              handleChange(e);
            }}
          >
              {enabledDocstates.map( state => 
                <option key={state.id} value={state.id}>{state.name + '(id '+state.id + ')'}</option>
              )}
          </Input>
          
          <Input
            as='textarea'
            className='col-6'
            label='Примітки:'
            name='note'
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