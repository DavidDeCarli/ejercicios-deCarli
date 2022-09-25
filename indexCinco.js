const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const Products = require('./desafios/desafioCinco/model/Products');
const apiRoutes = require('./desafios/desafioCinco/routers/app.routers');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./desafios/desafioCinco/public'));

//Routes
app.use('/api', apiRoutes);

const products = new Products();

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, './views/layouts'),
    partialsDir: path.resolve(__dirname, './views/partials') 
}));

app.set('views', './desafios/desafioCinco/views');
app.set('view engine', 'hbs');

app.get('/productos', (req, res) => {
    res.render('index', { mostrarProductos: true, products: products.getAll(), admin: true});
});

const connectedServer = app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
});