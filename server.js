require('./data/db');
const express = require('express');

const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const routes = require('./routes/routes');
const path = require('path')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const mustache = mustacheExpress();
mustache.cache = null;
//engine setup
app.engine('mustache', mustache);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/public');
app.use(express.static(path.join(__dirname, 'public')));
//get data from public folder
app.use('/', routes);
//post data online
app.post('/tasks', function (req, res) {

    res.json(req.body)
});
//create port to listen on localhost
app.listen(process.env.PORT || 5000, function () {
    console.log("Listening on port 5000")

});

