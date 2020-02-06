import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE } from "../../Constants/Actions";
import IStore from "../../Components/Store/Interfaces/IStore";

const initStore: IStore = {
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