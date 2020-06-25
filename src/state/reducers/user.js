import { DEF_USER_STATE, USER_LOGIN, USER_LOGOUT } from "../../constants";

export default (state=DEF_USER_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...action.user
            }
        case USER_LOGOUT:
            return DEF_USER_STATE
        default:
            return state
    }
}