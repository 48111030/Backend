const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcryptjs = require('bcryptjs'); // Importar bcrypt

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datoss
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DAVITO123',
    database: 'signup_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Andando che');
});

// Endpoint para registrar usuarios
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

   
  

        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
              let hash= await bcryptjs.hash(password, 8);
       
        db.query(sql, [username, email, hash], (err, result) => {
            if (err) {
                return res.status(500).send('Error al registrar el usuario');
            }
            res.status(200).send('Usuario registrado exitosamente');
            res.json({
        
                hash: hash
            });
        });
    });


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});