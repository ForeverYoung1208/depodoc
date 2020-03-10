import {
  FETCH_VOC_OK, FETCH_VOC_START, FETCH_VOC_ERROR,
} from '../actions/actionTypes'

const initialState = {
  doctypes:[   
    {"id":1,"name":"anketa1"},
    {"id":2,"name":"many documents2"}
  ],
  faces:[
    {"id":1,"name":"face1"},
    {"id":2,"name":"face2"}
  ],
  docstates:[
    {"id":1,"name":"docstate1-2","possible_changes":[2]},
    {"id":2,"name":"docstate2-3","possible_changes":[3]},
    {"id":3,"name":"docstate3-2,4","possible_changes":[2,4]}
  ],
  isLoading:false
}

export default function vocReducer(state=initialState, action){
  switch (action.type) {
    case FETCH_VOC_OK:
      let a =  {
        ...state,
        ...action.voc,
      	isLoading: false
      }
      return {
        ...state,
        ...action.voc,
      	isLoading: false
      };
    case FETCH_VOC_START:
      return {
      	...state,
      	isLoading: true
      };      
    case FETCH_VOC_ERROR:
      return {
      	...state,
      	isLoading: false
      };      
    default:
      return state      
  }
}