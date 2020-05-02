const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const colors = require('colors');

const postRoutes = require('./routes/posts');

const app = express();

mongoose.connect("mongodb://bolorundurovb:eberenus93@ds159845.mlab.com:59845/mean-post")
.then(() =>{
  console.log("Connected to database".blue.bgWhite);
})
.catch(() =>{
  console.log("Failed to connect to database".red.bgWhite);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept");

  res.setHeader("Access-Control-Allow-Methods",
   "GET, POST, PATCH, DELETE, PUT, OPTIONS");

  next();
});

app.use("/api/posts",postRoutes);


module.exports = app;