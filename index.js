const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://DhavalKanani:Kds@9202@react-app-yu3ac.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => {
  console.log("conncted")
}).catch(err=>console.log("error"))

app.listen(5000)
app.get('/',(req,res) => {
  res.send("runnig")
})