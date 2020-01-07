import {combineReducers} from 'redux'
import documentsReducer from './documents'

export default combineReducers({
	documents: documentsReducer
})