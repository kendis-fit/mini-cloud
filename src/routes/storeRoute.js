const express = require("express");

const item = require("../models/item").default;
const store = require("../models/store").default;

const storeRoute = express.Router();
const json = express.json;

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
        res.status(201).send({ id: newStore._id }); 
    }
    catch
    {
        res.sendStatus(500);
    }
});

storeRoute.post("/:id/items", json, (req, res) => {
    try
    {
        const { name } = req.body;

        const icon = ""; // TO DO: name of icon

        const newItem = new item({ name, icon });
        res.status(201).send({ id: newItem._id });
    }
    catch
    {
        res.sendStatus(500);
    }
});

storeRoute.get("/:id/items/:itemId", async (req, res) => {
    try
    {
        const { id, itemId } = req.params;

        const projection = { _id: 0, extension: 1 };
        const itemAsFile = await item.findOne({ _id: itemId }, projection).lean().exec();

        if (!itemAsFile) {
            res.sendStatus(404);
        } else {
            res.sendFile(`${__dirname}/src/stores/${id}/item/${itemId + itemAsFile.extension}`);
        }
    }
    catch
    {
        res.sendStatus(500);
    }
});

export default storeRoute;