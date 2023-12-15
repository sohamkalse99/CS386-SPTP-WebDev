const host = 'localhost';
const port = 3000;

const express = require('express');
const app = express();

let dataJSON = require('./data/dataJSON.js');
let dataCSV = require('./data/dataCSV.js');

// Html body content
let strHTML = `<h1>Homework 6</h1><hr>`;
strHTML+= `<p>To view or download JSON data</p>`;
strHTML+= `<a href="/view-json" target= "_blank">View JSON</a>&nbsp;`;
strHTML+= `<a href="/json" target= "_blank">Download JSON</a>`;
strHTML+= `<p>To view or download CSV data</p>`;
strHTML+= `<a href="/view-csv" target= "_blank">View CSV</a>&nbsp;`;
strHTML+= `<a href="/csv" target= "_blank">Download CSV</a>`;


let html_top = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HW6</title>
</head>
<body>
`;

let html_bottom = `</body></html>`;

// Home page
app.get("/", function(req, res){
    res.send(html_top+strHTML+html_bottom);
});

app.get("/view-json", function(req, res){
    res.status(200);
    res.json(dataJSON);
});

app.get("/view-csv", function(req, res){
    dataCSV = dataCSV.replace(/\n/g, '<br>');
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.json(dataCSV);
});

app.get("/json", function(req, res){
    res.setHeader('Content-Disposition', 'attachment; filename=dataJSON.json');
    res.set('Content-Type', 'application/json');
    res.status(200);
    res.send(dataJSON);
});

app.get("/csv", function(req, res){
    res.setHeader('Content-Disposition', 'attachment; filename=dataCSV.csv');
    res.set('Content-Type', 'application/csv');
    res.status(200);
    res.send(dataCSV);
});

//404 handler
app.use(function(req, res, next){
    res.status(404);
    res.send("<h2>Error has occurred</h2><p>404 Error Occurred. Page not Found</p>");
});

//500 handler
app.use(function(req, res, next) {
    
    let errCode = error.code || 500;
    let errMsg = error.message || 'Error has occured on 500';
    res.status(errCode);
    res.send("<h2>Error has occured </h2><p>Error "+errCode+"<br>"+errMsg+"</p>");
});


app.listen(port, host, function(){
    console.log(`Express server started on ${Date()} on server ${host}:${port}`);
})