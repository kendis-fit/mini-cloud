import { model, Schema } from "mongoose";

import { itemSchema } from "./item";

export const storeShema = new Schema({
    items: [itemSchema]
},
{
    versionKey: false,
    collection: "Stores"
});

const store = model("store", storeSchema);

export default store;