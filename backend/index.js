const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/', (rq,res)=>{
    res.send('Hello World!')
});

app.use(cors(
    {
        origin: ["mern-books-app-frontend.vercel.app"],
        methods: ["GET", "POST"],
        credentials: true
    }
));

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
