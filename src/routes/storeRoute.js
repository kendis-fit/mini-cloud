require("../helpers/stringExtensions");

const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
const express = require("express");

const { item } = require("../models/item");
const { store } = require("../models/store");
const checkStore = require("../middlewares/checkStore");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            const { id } = req.params;
            const path = `${__dirname}/../stores/${id}`;
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
        const storeDTO = await store.findOne({ _id: mongoose.Types.ObjectId(id)}).lean().exec();
        if (!storeDTO || !storeDTO.items.length === 0) {
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
        newStore.save();
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
            res.sendFile(`${__dirname}/src/stores/${id}/item/${itemId}.${itemAsFile.icon}`);
        }
    }
    catch
    {
        res.sendStatus(500);
    }   
});

storeRoute.post("/:id/items", json, async (req, res) => {
    try
    {
        const id = req.params.id;
        const { name } = req.body;

        const newItem = new item({ name, icon: name.extension() });
    
        const storeDTO = await store.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();
        storeDTO.items.push(newItem);
        storeDTO.save();
        res.status(201).send({ id: newItem._id, icon: newItem.icon });
    }
    catch
    {
        res.sendStatus(500);
    }
});

storeRoute.use("/:id/items/:itemId", checkStore);
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