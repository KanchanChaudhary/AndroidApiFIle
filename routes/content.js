const app = module.exports = require('express')();
const contentModel = require('../models/content')

app.post('/', function(req, res){
    console.log(req.body)
    let contenttype = req.body.contenttype;
    let title = req.body.title;
    let description = req.body.description;

    let addContent = new contentModel({
        contenttype: contenttype,
        title: title,
        description: description
        
    })

    addContent.save().then(function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            added: true,
            message: contenttype + ' added',
        }, null, 3));
    }).catch(function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            added: false,
            message: 'Failed to add ' + contenttype,
        }, null, 3));
    })

});


app.get('/', function(req, res, next){
    contentModel.find().then(function(result){
        res.json(result)
    }).catch(next)
})