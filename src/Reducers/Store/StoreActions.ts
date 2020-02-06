import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE, ADD_ITEM } from "../../Constants/Actions";
import IStoreItem from "../../Components/Store/Interfaces/IStoreItem";

export const CreateStore = (Id: string): StoreTypes => ({
    type: CREATE_STORE,
    value: Id
});

export const AddItem = (Item: IStoreItem): StoreTypes => ({
    type: ADD_ITEM,
    value: Item
});