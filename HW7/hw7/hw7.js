const host = 'localhost';
const port = 3000;

const express = require('express');
const mongoose = require('mongoose'); //Load mongoose

const userSchema = require('./data.js');

// const User = mongoose.model('User', userSchema);//Create and export model

const app = express();

app.use(express.urlencoded({extended:true}));

const hbs = require('express-handlebars');
const { Form } = require('react-router-dom');
const connectDB = require('./modules/db.js');
app.set('view engine', 'hbs');



app.engine('hbs', hbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout:'basic_layout',
    extname:'hbs',
}));

app.get("/", function(req, res){
    // let html = "<h1>Testing root route</h1>";
    // res.send(html);
    res.render('get_request');
});

app.post("/addname", function(req, res){
    // let html = "<h1>Testing addname route</h1>";
    // res.send(html);

    // console.log(req.body.first);

    const regUser = {
        firstName: req.body.first,
        lastName: req.body.last,
        DateTime: new Date().toLocaleString()
    };
    const FormData = new userSchema(regUser);

    FormData.save()
        .then(function () {
            const context = {
                firstName: req.body.first,
                lastName: req.body.last,
                DateTime: new Date().toLocaleString(),
            };
            // console.log(FormData.firstName);
            res.render('post_request', context);
            // connectDB(false);

        })

    // res.render('post_request', {datetime: new Date().toLocaleString(), first: "John", last: "Doe"});
});

app.listen(port, host, function(){
    console.log(`Express server started on ${Date()} on server ${host}:${port}`);
})