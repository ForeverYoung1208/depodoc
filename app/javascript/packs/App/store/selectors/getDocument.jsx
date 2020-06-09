
export const getDocument = (state, documentId) =>{
  const {documents} = state.documents;
  return documents.find( doc => doc.id == documentId )  
}