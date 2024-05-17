/* This is a simple😅 crud operation🍽️ 
Learn node｡🇯‌🇸‌, express｡🇯‌🇸‌, mongoDB🛢️, and CRUD⚔️
from twitter.com/Shahada37834874 🚀 */


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const POPT = 3001;

const productRoute = require("./routers/product.router.js")

// middleware 💀
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Router 🕹️
app.use("/api/products", productRoute)

// This is a Home Route 🏛️
app.get("/", (req, res) => {
    res.json("Hello Node Server. Explore CRUD operation")
})

// Server ╭∩╮( •̀_•́ )╭∩╮ ▬▬ι═══════ﺤ
mongoose.connect("mongodb://localhost:27017/Node-API")
.then(()=>{
    console.log("MongoDB Server is connected.");
    app.listen(POPT, ()=>{
        console.log(`The server is runing PORT http://localhost:${POPT}`)
    })
})
.catch(()=> {
    console.log("Connection faild!")
})


