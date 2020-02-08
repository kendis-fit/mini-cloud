import { StoreTypes } from "../../Constants/Types";
import IStore from "../../Components/Store/Interfaces/IStore";
import IStoreItem from "../../Components/Store/Interfaces/IStoreItem";
import { CREATE_STORE, ADD_ITEM, INIT_STORE, REMOVE_ITEM } from "../../Constants/Actions";

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
        case INIT_STORE:
            return action.value as IStore;
        case REMOVE_ITEM:
            return {
                ...state,
                Items: state.Items ? state.Items.filter(i => i._id !== action.value as string) : undefined
            }
        default:
            return state;
    }
}

export default StoreReducer;