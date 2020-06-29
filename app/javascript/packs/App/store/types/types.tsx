export type documentType = {
  companies?: [];
  created_at: string;
  creator_name: string;
  doctype: string;
  face: {id: number, name: string};
  id: number;
  last_docstate: {id: number, name: string, possible_changes: Array<number>}
  name: string;
  note: string;
  operations: Array<number>;
  updated_at: string;
}
export { documentsStateType } from '../reducers/documents'


export type faceType = {
  id:number;
  code:string
  name:string
  note?:string
  is_fiz:boolean,
  is_resident:boolean
}
export type facesPayloadType = {faces?:Array<faceType>, error?:errorType}
export { facesStateType } from '../reducers/faces'

export type errorType = { message:string }