const express = require('express')
require('dotenv').config()
const db = require("./config/db")   //TODO Docker with db

const app = express()

 const port = process.env.port
 app.use(express.json())


 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log()
  })
 app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/test', (req, res) => {
    res.send("Simple Webserver working")
  })
  app.get('/vote/:questionid', (req,res)=>{ //endpoint for votes to a spec question, res should contain the answer and the ip
    let questionid = req.params.questionid
    let ip = req.body.ipaddress
    res.send(questionid + " is you number")
    db.query("SELECT * from ipaddress WHERE QuestionID =? AND ipaddress = ?", [questionid, ip], (err, result)=>{
      if(err) {
        //not found -> darf Stimme für diese Frage abgeben
      }
    })
  })