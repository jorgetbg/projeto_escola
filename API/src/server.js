const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://projeto:BGiXfqAgWCWxT4ul@projeto.mxplu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,


})

app.use(express.json());
app.use(routes);



app.listen(8087);
