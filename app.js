const express = require ('express')
const app = express()

console.log('app is running')

app.get('/',function (req,res){
   // res.send('hello everyone')
   console.log(__dirname);
   res.sendFile(__dirname+'/public/index.html')
})
app.get('/newroute',function(req,res){
    res.send("hi this is 1st route")
})
app.listen(8080)