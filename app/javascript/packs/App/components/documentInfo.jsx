import React from 'react'
import classes from './documentInfo.module.css'
import PT from 'prop-types';

function DocumentProperty(params){
  return(
    <div className={classes["group"]}>
      <span className={classes["name"]} >{params.name}:</span>
      <span className={classes["value"]} >{params.value}</span>
    </div>
  )
}

export default function DocumentInfo(params) {
  const {id, doctype, name, note, face, last_docstate, creator_name} = params.document

  return(
    <section>    
      <DocumentProperty name = {'Id '} value={id}/>
      <DocumentProperty name = {'Кто Завів'} value={creator_name}/>
      <DocumentProperty name = {'Тип '} value={doctype}/>
      <DocumentProperty name = {'Назва '} value={name}/>
      <DocumentProperty name = {'Примітки '} value={note}/>
      <DocumentProperty name = {'По особі '} value={face.name}/>
      <DocumentProperty name = {'Поточний стан '} value={last_docstate.name}/>
    </section>
  )
}

DocumentInfo.propTypes = {
    paras: PT.shape({
      id: PT.number, 
      doctype: PT.string, 
      name: PT.string, 
      note: PT.string,
      face: PT.string,
      last_docstate: PT.string,
      creator_name: PT.string
    })
};