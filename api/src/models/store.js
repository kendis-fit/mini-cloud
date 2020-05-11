const { model, Schema } = require("mongoose");

const { itemSchema } = require("./item");

const storeSchema = new Schema({
    items: [itemSchema]
},
{
    versionKey: false,
    collection: "Stores"
});

const store = model("store", storeSchema);

module.exports = {
    store, storeSchema
};