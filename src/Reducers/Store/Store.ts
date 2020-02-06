import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE } from "../../Constants/Actions";

const StoreReducer = (state = {}, action: StoreTypes) => {
    switch (action.type)
    {
        case CREATE_STORE:
            return;
        default:
            return state;
    }
}

export default StoreReducer;