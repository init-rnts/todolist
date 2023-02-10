const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(`${__dirname}/date.js`);

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const port = 3000;

const todos = [];
const works = [];

app.get("/", (req, res) => {

    let day = date.getDay();

    res.render("list", {day: day, todos: todos});
});

app.get("/work", (req, res) => {
    res.render("list", {day: "Work List", todos: works});
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.post("/", (req, res) => {
    let todo = req.body.todoName;
    
    if (req.body.list === "Work List") {
        works.push(todo);
        res.redirect("/work");
    } else {
        todos.push(todo);
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log("Server is running on port:3000.");
});