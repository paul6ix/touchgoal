require('./data/db');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
//get data from public folder
app.use('/', routes);
//post data online
app.post('/tasks', function (req, res) {
    res.json(req.body)
});
//email post
app.post('/email', function (req, res) {
    console.log(req.body);
    const output = `
<h2> This Weeks Report from  <b>${req.body.name}</b></h2>
<p> Monday: <br> ${req.body.monday}</p><br>
<p> Tuesday: <br> ${req.body.tuesday}</p><br>
<p> Wednesday: <br> ${req.body.wednesday}</p><br>
<p> Thursday: <br> ${req.body.thursday}</p><br>
<p> Friday: <br> ${req.body.friday}</p><br>



`;
    let transporter = nodemailer.createTransport({
        host: 'mail.6ixtech.com.ng',
        port: 587,
        secure: false,
        auth: {
            user: '2018@6ixtech.com.ng',
            pass: 'touchcore'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        from: `${req.body.name} <'2018@6ixtech.com.ng'>`,
        to: 'ick@touchcoreltd.com',
        subject: 'Weekly report',
        html: output

    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('public', {message: window.alert('message sent')})
    });

});

//create port to listen on localhost
app.listen(process.env.PORT || 5000, function () {
    console.log("Listening on port 5000")

});

