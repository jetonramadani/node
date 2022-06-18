const express = require("express");

const router = express.Router();


// app.use('/', (req, res, next) => {
//     res.send("<h1>Hello from Express</h1>")
// })


router.get('/', (req, res, next) => {
    res.send("Welcome To the homepage");
});


module.exports = router;