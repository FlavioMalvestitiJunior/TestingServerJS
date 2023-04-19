const express = require("express")
const app = express();

app.get(`/`,(req,res)=>{
    console.log(JSON.stringify(req.params,null,2))
    console.log(JSON.stringify(req.body,null,2))
    console.log(JSON.stringify(req.query,null,2))
    console.log(JSON.stringify(req.originalUrl,null,2))
    console.log(req)
    return res.send(200)
})

app.listen(3000,'0.0.0.0',()=>{
    console.log("up on 3000")
})