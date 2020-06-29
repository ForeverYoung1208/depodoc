import {combineReducers} from 'redux'
import documentsReducer from './documents'
import facesReducer from './faces'
import vocReducer from './voc'

export default combineReducers({
	documents: documentsReducer,
	faces: facesReducer,
	voc: vocReducer
})