const express = require('express');
const fs = require('fs/promises');

const PORT = 8080;

const app = express();

app.engine('cte', async(path, options, callback) => {
    try{
        const content = await fs.readFile(path, 'utf-8');
        const html = content
            .replace('^^titulo$$', `${options.titulo}`)
            .replace('^^mensaje$$', `${options.mensaje}`)
            .replace('^^autor$$', `${options.autor}`)
            .replace('^^version$$', `${options.version}`)
        return callback(null, html);
    }
    catch(error){
        return callback(error);
    }
});

app.set('views', './desafios/desafioCinco/pruebas/views');
app.set('view engine', 'cte');

app.get('/cte1', (req, res) => {
    res.render('plantilla', { 
        titulo: "Clase de plantillas",
        mensaje: "Estamos aprendiendo",
        autor: "David De Carli",
        version: "1.0.0"
    })
});

app.listen(PORT, ()=>console.log("Ready on port => ", PORT));

