const mongoose = require('mongoose');
const schema = mongoose.Schema;
let tasksSchema = new schema({
    name: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required : true

    },
    date: {
        type: String,
        default: Date.now,
    }

});
module.exports = mongoose.model('Tasks', tasksSchema);