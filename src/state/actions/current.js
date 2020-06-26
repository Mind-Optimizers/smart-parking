import { SET_CURRENT_PARKING, REMOVE_CURRENT_PARKING } from "../../constants";

export const setCurrentParking = parking => ({
    type: SET_CURRENT_PARKING,
    parking
})

export const removeCurrentParking = () => ({
    type: REMOVE_CURRENT_PARKING
})