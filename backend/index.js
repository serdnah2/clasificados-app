const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./db/dbconnector');
const { router } = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use('/api/', router);
app.listen('3000', ()=> {
    connection.connect(error => {
        if (error) {
            console.error('Error conectando a la base de datos' + error.stack);
            return;
        }

        console.log('Ahora estamos conectados a la base de datos');
    })
    console.log('Servidor corriendo en el puerto: 3000');
});
