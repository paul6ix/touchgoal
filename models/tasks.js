const mongoose = require('mongoose');
const schema = mongoose.Schema;
let tasksSchema = new schema({
    task: {
        type: String,
        required : true

    },
    done: {
        type: Boolean,
        default: false
    }

});
module.exports = mongoose.model('Tasks', tasksSchema);