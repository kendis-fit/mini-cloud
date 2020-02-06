import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE, ADD_ITEM } from "../../Constants/Actions";
import IStore from "../../Components/Store/Interfaces/IStore";
import IStoreItem from "../../Components/Store/Interfaces/IStoreItem";

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
        case ADD_ITEM:
            let items: IStoreItem[] = [];
            if (state.Items)
            {
                items = [...state.Items, action.value as IStoreItem];
            }
            return {
                ...state,
                Items: items
            } 
        default:
            return state;
    }
}

export default StoreReducer;