import { combineReducers } from 'redux'
import user from './user'
import currentParking from './current'

export default combineReducers({
    user,
    currentParking
})