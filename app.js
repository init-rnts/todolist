const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();
    const today = date.getDay();
    let day = "";

    switch (today) {
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            day="Sunday";
            break;
    }

    res.render("list", {day: day});
});

app.listen(port, () => {
    console.log("Server is running on port:3000.");
});