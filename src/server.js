const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://projeto:projeto@projeto-shard-00-00.mxplu.mongodb.net:27017,projeto-shard-00-01.mxplu.mongodb.net:27017,projeto-shard-00-02.mxplu.mongodb.net:27017/projeto2?ssl=true&replicaSet=atlas-ukw6vh-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,


})

app.use(express.json());
app.use(routes);



app.listen(8087);