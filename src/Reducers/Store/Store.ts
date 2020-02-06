import IStore from "./Interfaces/IStore";
import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE } from "../../Constants/Actions";

const initStore: IStore = {
    Id: null,
    Items: []
}

const StoreReducer = (state: IStore = initStore, action: StoreTypes) => {
    switch (action.type)
    {
        case CREATE_STORE:
            return {
                Id: action.value,
                Items: []
            };
        default:
            return state;
    }
}

export default StoreReducer;