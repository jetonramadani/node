const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();


// app.use('/', (req, res, next) => {
//     res.send("<h1>Hello from Express</h1>")
// })


router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;