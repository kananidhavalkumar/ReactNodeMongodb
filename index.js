const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const {User} = require('./models/user')
const config = require('./config/key')

mongoose.connect(config.MongoURI,{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => {
  console.log("conncted")
}).catch(err=>console.log("error"))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/api/users/register',(req,res) => {
  const user = new User(req.body)
  user.save((err,data) => {
    if(err) return res.json({success:false,err})
  })
  return res.status(200).json({success:true})
})


app.listen(5000)
app.get('/',(req,res) => {
  res.send("runnig")
})