const http = require('http');

const PORT = process.env.PORT || 8080;

// createServer
const server = http.createServer((req, res) => { //request y response
    console.log('El cliente realizó una petición');
    console.log(req.url, req.method);
    if(req.url === '/' && req.method === 'GET') {
        res.end('Soy la pagina de inicio')
    }
    else if(req.url === '/login'){
        res.end('Soy la pagina de login')
    }
    else{
        res.write('Hola mundo');
        res.end('Chau todos'); // se acostumbra a usar sólo el RES.END
        // res.write('Soy un contenido tímido'); no se puede enviar un WRITE después de un END
    }
});

// listen (para darle el arranque)
const connectedServer = server.listen(PORT, () => {
    console.log('Servidor activo y escuchando en el puerto ' + PORT);
});

// ctrl + c para detener la petición