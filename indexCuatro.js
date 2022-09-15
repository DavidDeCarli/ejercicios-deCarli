const path = require('path');
const express = require('express');
const apiRoutes = require('./desafios/desafioCuatro/routers/app.routers');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./desafios/desafioCuatro/public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './desafios/desafioCuatro/public/index.html'));
// });

// app.get('/styles.css', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './desafios/desafioCuatro/public/styles.css'));
// });

// app.get('/browser-app.js', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './desafios/desafioCuatro/public/browser-app.js'));
// });

// app.get('/logo.svg', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './desafios/desafioCuatro/public/logo.svg'));
// });

//Routes
app.use('/api', apiRoutes);

const connectedServer = app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
});