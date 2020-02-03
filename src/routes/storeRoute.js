const express = require("express");

const storeRoute = express.Router();

storeRoute.get("/:id");
storeRoute.post("/")
storeRoute.get("/:id/");
storeRoute.post("/:id/items");

export default storeRoute;