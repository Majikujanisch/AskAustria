const express = require('express')
require('dotenv').config()
const db = require("./config/db")

const app = express()

 const port = process.env.port
 app.use(express.json())


 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 app.get('/', (req, res) => {
    res.send('Hello World!')
  })