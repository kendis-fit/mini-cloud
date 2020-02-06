require("../helpers/stringExtensions");

const fs = require("fs");
const multer = require("multer");
const express = require("express");

const { item } = require("../models/item");
const { store } = require("../models/store");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            const { id, itemId } = req.params;
            const path = `${__dirname}/stores/${id}`;
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path);
            }
            callback(null, path);
        },
        filename: (req, file, callback) => {
            const itemId = req.params.itemId;
            callback(null, itemId + "." + file.originalname.extension());
        }
    })
});
const storeRoute = express.Router();
const json = express.json();

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

storeRoute.post("/:id/items", json, (req, res) => {
    try
    {
        const { name } = req.body;

        const newId = new item({ name, icon: name.extension() });
        if (newId)
        {
            res.status(201).send(newId._id);
        }
    }
    catch
    {
        res.sendStatus(500);
    }
});

storeRoute.post("/:id/items/:itemId", upload.single("file"), async (req, res) => {
    try
    {
        const file = req.file;
        
        if (!file)
        {
            const itemId = req.params.itemId;

            await item.findOneAndDelete({ id: itemId });
            res.sendStatus(400);
        }
        else
        {
            res.sendStatus(201);
        }
    }
    catch
    {
        res.sendStatus(500);
    }
});

module.exports = storeRoute;