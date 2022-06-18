const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send(`
    <form action="/admin/add-product" method="POST">
        <input type="text" name="title"/>
        <input type="submit" value='Add Product'/>
    </form>
    
    `)
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