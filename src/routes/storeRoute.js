const express = require("express");

const item = require("../models/item").default;
const store = require("../models/store").default;

const storeRoute = express.Router();

storeRoute.get("/:id", async (req, res) => {
    try
    {
        const id = req.params.id;
        const projection = { _id: 0 };
        const storeDTO = await store.findOne({ _id: id }, projection).lean().exec();
        if (!storeDTO.items.length === 0) {
            res.sendStatus(404);
        } else {
            res.status(200).send(storeDTO.items);
        }
    }
    catch
    {
        res.sendStatus(500);
    }
});

storeRoute.post("/", (req, res) => {
    try
    {
        const newStore = new store();
        res.status(200).send({ id: newStore._id }); 
    }
    catch
    {
        res.sendStatus(500);
    }
});

storeRoute.get("/:id/");
storeRoute.post("/:id/items");

export default storeRoute;