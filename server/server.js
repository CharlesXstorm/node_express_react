
const express = require("express")
const app = express()
const bodyparser = require("body-parser")

const handlerRouter = require("./routes/handler")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(handlerRouter)


const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})