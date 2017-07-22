import { FETCH_BREEDS } from "../constants"

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_BREEDS:
            return action.payload.data.message;
        default:
            return state;
    }
}