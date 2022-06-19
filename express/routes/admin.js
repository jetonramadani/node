const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
})

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


// app.use('/users', (req, res, next) => {
//     res.send(`
//     <ul>
//     <li>User 1</li>
//     <li>User 2</li>
//     <li>User 3</li>
//     </ul>
//     `)
// });

module.exports = router;