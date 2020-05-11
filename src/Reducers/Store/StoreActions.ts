import { StoreTypes } from "../../Constants/Types";
import IStore from "../../Components/Store/Interfaces/IStore";
import IStoreItem from "../../Components/Store/Interfaces/IStoreItem";
import { CREATE_STORE, ADD_ITEM, INIT_STORE, REMOVE_ITEM } from "../../Constants/Actions";

export const CreateStore = (id: string): StoreTypes => ({
    type: CREATE_STORE,
    value: id
});

export const AddItem = (item: IStoreItem): StoreTypes => ({
    type: ADD_ITEM,
    value: item
});

export const InitStore = (store: IStore): StoreTypes => ({
    type: INIT_STORE,
    value: store
});

export const RemoveItem = (id: string): StoreTypes => ({
    type: REMOVE_ITEM,
    value: id
});