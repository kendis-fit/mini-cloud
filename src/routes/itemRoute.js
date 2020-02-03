const express = require("express");

const itemRoute = express.Router();

itemRoute.get("/items/:id");

export default itemRoute;