const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require ('cors');
const { createRoles } = require('./libs/initialSetUp');
require('dotenv').config();

const app = express()
createRoles()

dbConnection();

app.use(cors())

app.use(express.static('public'));

app.use( express.json());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/inscripciones', require('./routes/inscripciones'))

app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})