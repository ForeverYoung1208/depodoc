import {combineReducers} from 'redux'
import documentsReducer from './documents'
import vocReducer from './voc'

export default combineReducers({
	documents: documentsReducer,
	voc: vocReducer
})