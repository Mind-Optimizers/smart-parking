import { USER_LOGIN } from "../../constants";

export const loginUser = user => ({
    type: USER_LOGIN,
    user
})