const express = require("express")
const morgan = require("morgan")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 2689
const entryRoutes = require("./routes/entryRoutes")

app.use(morgan("dev"))
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/moodapp", { useNewUrlParser: true }, () => {
    console.log("Connected to database")
}).catch(err => {
    console.log(err)
})


//first arg is endpoint
//second is what routes to use
app.use("/entry", entryRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})