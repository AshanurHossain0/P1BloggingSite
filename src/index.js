
const express = require('express')
const mongoose = require('mongoose')
const route = require("./route/route")

const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://ashanur:nurasha2000@ashanurdb.x6brlcb.mongodb.net/miniBlogs",{
      useNewUrlParser:true
})
      .then(() => console.error("My DB is connected"))
      .catch((err) => console.error(err))



app.use("/", route)

app.listen(3000 , () => {
      console.error("Express app running on port " + 3000);
})
