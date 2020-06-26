import { SET_CURRENT_PARKING, REMOVE_CURRENT_PARKING, USER_LOGOUT } from "../../constants";

export default (state={}, action) => {
    switch (action.type) {
        
        case SET_CURRENT_PARKING:
            console.log('Action', action)
            return {
                ...state, 
                ...action.parking,
            }
    
        case REMOVE_CURRENT_PARKING:
            return {}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}