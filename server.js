const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/api/user',(req,res)=>{
    res.send({
        name:"jafar",
        age:30
    });
})

app.post('/api/user',(req,res)=>{
    res.send({
        name:req.body.name,
        age:req.body.age
    })
})

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})