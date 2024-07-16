const express = require('express')
const app = express()
const userRouter = require("./user-route")
global.pool = require('./database')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("hello ganesh")
})


app.listen(3000, () => {

    console.log("server listeing on 3000")
})