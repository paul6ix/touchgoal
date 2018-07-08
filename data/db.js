const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
dbhost = 'mongodb://localhost:27017/taskDB';
remotehost = 'mongodb://paul:task123@ds229771.mlab.com:29771/tasks-db';
mongoose.connect(remotehost, {
}).then(function () {
    console.log('Connected to database ' );


});
