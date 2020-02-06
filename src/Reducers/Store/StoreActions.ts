import { StoreTypes } from "../../Constants/Types";
import { CREATE_STORE } from "../../Constants/Actions";

export const CreateStore = (): StoreTypes => ({
    type: CREATE_STORE
});