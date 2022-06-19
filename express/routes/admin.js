const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
})

const products = [];

router.post("/add-product", (req, res, next) => {
    // console.log(req.body);
    console.log(products)
    products.push({
        title: req.body.title
    });
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

exports.products = products;
exports.routes = router;