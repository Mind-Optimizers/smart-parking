import { DEF_USER_STATE, USER_LOGIN } from "../../constants";

export default (state=DEF_USER_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...action.user
            }
        default:
            return state
    }
}