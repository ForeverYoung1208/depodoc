import React from 'react'
import { useSelector } from 'react-redux'



export default function useDocument(documentId){
  const {documents} = useSelector( state => state.documents )
  return documents.find( doc => doc.id == documentId )  
}