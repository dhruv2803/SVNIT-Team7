const express = require("express");
// const path = require("path");
const data = require("./Stock List.json");
const app = express();
const func = require("./functions/dataclean");

app.get("/getdata", (req, res) => {
    console.log(req.query);
    if (
        req.query.symbol !== "" &&
        req.query.inidate !== "" &&
        req.query.fidate !== ""
    ) {
        let newdata = func.cleanDataByDateRange(
            func.cleanDataBySymbol(func.cleanData(data), req.query.symbol),
            req.query.inidate,
            req.query.fidate
        );
        console.log(newdata);
        res.send({ data: newdata });
    } else if (req.query.symbol !== "") {
        let newdata = func.cleanDataBySymbol(
            func.cleanData(data),
            req.query.symbol
        );
        console.log(newdata);
        res.send({ data: newdata });
    } else {
        let newdata;
    }

    // else{}
    // console.log("here i am");
    // let data = func.getSymbols();
    // // console.log(data);
    // res.send({ data });
    // console.log("data sent");
});

app.listen(5000, () => {
    console.log("App Starting");
});
