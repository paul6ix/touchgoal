const router = require('express').Router();
const Tasks = require('../models/tasks');

router.get('/', function (req, res) {
    Tasks.find({}).then(function (result) {
        let task = result.filter(function (task) {
            return !task.done;

        });
        let taskDone = result.filter(function (task) {
            return task.done;
            
        });


            res.render('index', {task: task, taskDone: taskDone});
    })

});
router.post('/tasks', function (req, res) {
    let newTask = new Tasks({task: req.body.task});
    newTask.save().then(function (result) {
        console.log(result);
        res.redirect('/');

    }).catch(function (err) {
        console.log(err);
        res.redirect('/');

    });


});
router.post('/tasks/:id/completed', function (req,res) {
    let taskId = req.params.id;
    Tasks.findById(taskId)
        .exec().then(function (result) {
        result.done =!result.done;
        return result.save();
    }).then(function (result) {

        res.redirect('/')
    });


});
module.exports = router;