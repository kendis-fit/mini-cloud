require("dotenv").config();

const port = process.env["PORT"];
const connectionString = process.env["CONNECTION_STRING"];

if (!port || !connectionString)
{
    console.log("you have to add variable PORT and CONNECTION_STRING to environment variables");
    process.exit(1);
}

const express = require("express");
const mongoose = require("mongoose");

const itemRoute = require("./routes/itemRoute");
const storeRoute = require("./routes/storeRoute");

const app = express();

mongoose.connect(connectionString, {
    dbName: "StoreDB"
}, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});

app.use(express.static(`${__dirname}/images`));

app.use("/stores", storeRoute);
app.use("/items", itemRoute);

app.listen(port, () => {
    console.log(`Server has bee running by port ${port}`);
});