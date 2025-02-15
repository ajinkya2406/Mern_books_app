const express = require('express')
const router = express.Router()

router.post('/bookData', (req,res)=>{
    try {
        res.send([global.books,global.books_categories])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;