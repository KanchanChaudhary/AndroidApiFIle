const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const taskRouter = require('./routes/tasks');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/Users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const voteRouter=require('./routes/vote');
const resultRouter=require('./routes/result');
const auth = require('./routes/auth');
const cors = require('cors');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/addvote', voteRouter);
app.use('/addresult',resultRouter);
app.use(auth.verifyUser);
app.use('/categories', categoryRouter);
app.use('/tasks', taskRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
