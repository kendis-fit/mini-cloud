import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE } from "../../Constants/Actions";

export const CreateStore = (Id: string): StoreTypes => ({
    type: CREATE_STORE,
    value: Id
});