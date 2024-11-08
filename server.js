const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/EP3IntegracionDB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB', err));

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`));
