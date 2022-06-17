const http = require("http");

const express = require("express");

const app = express();

// app.use("/add-product", (req, res, next) => {
//     console.log("Hi x1");
//     res.send("<h1>Hello from Add Product</h1>")
// })
// app.use('/', (req, res, next) => {
//     console.log("Hi x2");
//     res.send("<h1>Hello from Express</h1>")
// })
app.use('/users', (req, res, next) => {
    res.send(`
    <ul>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
    </ul>
    `)
});

app.use('/', (req, res, next) => {
    res.send("Welcome To the homepage");
});


app.listen(3000)
