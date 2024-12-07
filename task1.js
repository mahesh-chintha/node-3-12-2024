var express=require('express')
var app=express()
var cors=require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.post('/data',(req,res)=>{

 console.log(req.body)

 res.send(req.body)  
})
var port=3036
app.listen(port,()=>{
    console.log("http://localhost:"+port)
})