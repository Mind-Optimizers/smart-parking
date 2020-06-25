import { USER_LOGIN, USER_LOGOUT } from "../../constants";

export const loginUser = user => ({
    type: USER_LOGIN,
    user
})

export const logoutUser = () => ({
    type: USER_LOGOUT
})