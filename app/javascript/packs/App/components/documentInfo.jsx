import React from 'react'
import classes from './documentInfo.module.css'

function DocumentProperty(params){
  return(
    <div className={classes["group"]}>
      <span className={classes["name"]} >{params.name}:</span>
      <span className={classes["value"]} >{params.value}</span>
    </div>
  )
}

export default function DocumentInfo(params) {
  console.log('[params]', params);
  const {id, doctype, name, note, face, last_docstate} = params.document

  return(
    <section>    
      <DocumentProperty name = {'Id '} value={id}/>
      <DocumentProperty name = {'Тип '} value={doctype}/>
      <DocumentProperty name = {'Назва '} value={name}/>
      <DocumentProperty name = {'Примітки '} value={note}/>
      <DocumentProperty name = {'По особі '} value={face.name}/>
      <DocumentProperty name = {'Поточний стан '} value={last_docstate.name}/>
    </section>
  )
}