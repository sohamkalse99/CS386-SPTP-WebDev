const { error } = require('console');
const express = require('express');
const fileSystem = require('fs');
const path = require('path');

const app = express();

const HOST = 'localhost';
const PORT = 3000;
const DIR = path.join(__dirname, '/logs');
const FILE_LOG = path.join(DIR, '/log.txt');
const HTML = '<h1>In-Class Programming 13</h1>';

function fLog(message){
    // const logData = `Server started on: ${new Date().toLocaleString()}`;

    fileSystem.appendFileSync(FILE_LOG, message, function(error){
        if(error)
            console.error('Error writing to log file', error);
    });

}


app.get('/', function(req, res) {
    
    // fLog('Request received on:'+new Date().toLocaleString());
    let agent = req.get('user-agent');
    let hostname =  req.hostname;
    let ip = req.ip;
    let protocol = req.protocol;

    let message = `\nRequest received on: +${new Date().toLocaleString()}\n----User Agent: ${agent}\n----Hostname: ${hostname}:${PORT}\n----IP address: ${ip}\n----Protocol: ${protocol}`;
    fLog(message);
    res.send(HTML);
});

app.get('/error', function(req, res, next){

    throw new Error("Something went wrong");

});

//404 handler
app.use(function(req, res, next){
    
    // fLog(`\nError 404 generated on ${new Date().toLocaleString()}`);
    
    res.status(404);
    res.send("<h2>Error has occured </h2><p>Error 404 <br> Page not Found</p>");

    // let error = new Error("Page not found");
    // error.code = 404;
    // next(error);
    fLog(`\nError 404 generated on: ${new Date().toLocaleString()}`);
});

//500 handler
app.use(function(error, req, res, next){

    let errCode = error.code || 500;
    let errMsg = error.message || 'Error has occured on 500';
    res.status(errCode);
    res.send("<h2>Error has occured </h2><p>Error "+errCode+"<br>"+errMsg+"</p>");
    fLog(`\nError 500 generated on: ${new Date().toLocaleString()}`);
    // res.status(500);
    // res.send("<h2>Error has occured on 500</h2>");
    

});


const server = app.listen(PORT, HOST, function(){
    
    if(!fileSystem.existsSync(DIR)){
        fileSystem.mkdirSync(DIR);
    }

    fLog(`Server started on: ${new Date().toLocaleString()}`);

    console.log('Server running on port'+PORT);


});

// app.use(function(error, req, res, next){
//     fLog(`\n${error.message} on ${new Date().toLocaleString()}`);
//     res.send(`<p>${error.message}</p>`);
// });
