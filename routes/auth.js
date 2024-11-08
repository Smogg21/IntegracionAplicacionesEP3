const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Registrar nuevo usuario
router.post('/register', async (req, res) => {
    try {
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        
        const user = new User({
            nombres: req.body.nombres,
            apellidoPaterno: req.body.apellidoPaterno,
            apellidoMaterno: req.body.apellidoMaterno ? req.body.apellidoMaterno : null,
            correo: req.body.correo,
            password: hashedPassword
        });

        // Guardar usuario en la BD
        await user.save();
        res.status(201).send('Usuario creado exitosamente');
    } catch (error) {
        res.status(400).send('Error al crear el usuario: ' + error);
    }
});

// Autenticación de usuario
router.post('/login', async (req, res) => {
    try {
        // Buscar usuario por correo
        const user = await User.findOne({ correo: req.body.correo });
        if (!user) return res.status(400).send('Usuario no encontrado');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Contraseña incorrecta');

        res.send('Autenticación exitosa');
    } catch (error) {
        res.status(500).send('Error en el servidor: ' + error);
    }
});

module.exports = router;
