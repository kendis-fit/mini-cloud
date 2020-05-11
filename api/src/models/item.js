const { model, Schema } = require("mongoose");

const itemSchema = new Schema({
    name: {
        type: String,
        required: Boolean
    },
    icon: {
        type: String
    }
},
{
    versionKey: false,
    collection: "Items"
});

const item = model("item", itemSchema);

module.exports = {
    item, itemSchema
}