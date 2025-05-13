const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');
const path = require('path'); 
const session = require('express-session');
const flash = require("connect-flash");
app.use(session({
    secret: 'MyS3CR3T#@!@CGGmn',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_message = req.flash("success");
    res.locals.error_message = req.flash("error");
    next();
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./router/student.router'))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${process.env.PORT}`);
    db.connectDB();
});