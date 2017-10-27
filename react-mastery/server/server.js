require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');

let app = express();
app.use(bodyParser.json());
app.use(cors());

//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})

app.get('/products/getALL', controller.getAllProducts)
app.post('/products/create', controller.createProduct)
app.patch('/products/update', controller.updateProduct)
app.delete('/products/delete/:id', controller.deleteProduct)

app.get('/users/:id', controller.getUserById)


var port = 5050;
app.listen(port, () => {
    console.log("Listening on port", port)
})