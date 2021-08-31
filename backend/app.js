const express = require("express");
// const path = require("path");
const app = express();
const func = require("./functions/dataclean");

app.get("/", (req, res) => {
    console.log("here i am");
    let data = func.getSymbols();
    res.json({ data });
});

app.listen(8080, () => {
    console.log("App Starting");
});
