const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Initializing the application
const app = express();
app.use(express.json());
app.use(cors());


// Initializing DataBase
mongoose.connect('mongodb://localhost:27017/schedule', {useNewUrlParser: true, useUnifiedTopology: true});



requireDir('./src/models');


app.use("/api", require("./src/routes"));

app.listen(3001);