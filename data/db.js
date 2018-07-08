const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
dbhost = 'mongodb://localhost:27017/taskDB';
mongoose.connect(dbhost, {
}).then(function () {
    console.log('Connected to database ' );


});
