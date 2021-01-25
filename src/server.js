const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('insira seu link com o banco aqui', {
    useNewUrlParser: true,
    useUnifiedTopology: true,


})

app.use(express.json());
app.use(routes);



app.listen(8087);
