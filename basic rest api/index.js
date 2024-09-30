const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
let bloglist = [];
app.get('/blogs', (req, res) => {

    return res.status(200).json({
        data: bloglist,
        sucess: true
    })
})
app.post('/blogs', (req, res) => {
    bloglist.push({
        title: req.body.title,
        content: req.body.content,
        id :Math.floor(Math.random()*1000)
    })
    return res.status(201).json({
        sucess: true,

    })
})
app.get('/blogs/:id', (req, res) => {
     const result=bloglist.filter((blogs)=>blogs.id==req.params.id)
    return res.status(201).json({
        data: result,
        sucess: true
    })
})
app.listen(PORT, function process() {
    console.log("Server started");
})