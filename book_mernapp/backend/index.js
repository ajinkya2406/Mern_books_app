const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();

app.get('/', (rq,res)=>{
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})