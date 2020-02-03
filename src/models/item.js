import { model, Schema } from "mongoose";

export const itemSchema = new Schema({
    name: {
        type: String,
        required: Boolean
    }
},
{
    versionKey: false,
    collection: "Items"
});

const item = model("item", itemSchema);

export default item;