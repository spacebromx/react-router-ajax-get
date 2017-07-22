import { FETCH_BREED_INFO } from "../constants";

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_BREED_INFO:
            return action.payload.data.message;
        default:
            return state;
    }
}