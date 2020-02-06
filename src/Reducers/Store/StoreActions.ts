import { StoreTypes } from "../../Constants/Types";
import IStore from "../../Components/Store/Interfaces/IStore";
import IStoreItem from "../../Components/Store/Interfaces/IStoreItem";
import { CREATE_STORE, ADD_ITEM, INIT_STORE } from "../../Constants/Actions";

export const CreateStore = (Id: string): StoreTypes => ({
    type: CREATE_STORE,
    value: Id
});

export const AddItem = (Item: IStoreItem): StoreTypes => ({
    type: ADD_ITEM,
    value: Item
});

export const InitStore = (Items: IStore): StoreTypes => ({
    type: INIT_STORE,
    value: Items
});