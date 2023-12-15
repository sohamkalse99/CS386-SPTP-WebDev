const host = 'localhost';
const port = 5000;

const express = require('express');
const routes = require('./routes/routes.js');

const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/', routes);

/*const indexPath = path.join(__dirname, 'public','react-deploy-app');
console.log('Directory...... ', indexPath);

app.use(express.static(indexPath));

app.get("/", function(req, res){
  res.sendFile('index.html', {root:indexPath});
})

app.get("*", function (req, res) {
  res.sendFile("index.html", { root: indexPath });
});*/

app.listen(port, host, function(){
  console.log(`Express server started on ${Date()} on server ${host}:${port}`);
})