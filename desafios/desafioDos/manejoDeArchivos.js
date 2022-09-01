const fs = require('fs');

class Contenedor{
    constructor(name){
        this.name = name;
    }

    async save (informacion){
        try{
            let contenido = await fs.promises.readFile(`./desafios/desafioDos/${this.name}`, 'utf-8');
            let contenidoJson = JSON.parse(contenido);
            let ultimoIndice = contenidoJson.length - 1;
            let ultimoId = contenidoJson[ultimoIndice].id;
            informacion.id = ultimoId + 1;
            let id = informacion.id;
            contenidoJson.push(informacion);
            await fs.promises.writeFile(`./desafios/desafioDos/${this.name}`, JSON.stringify(contenidoJson));
            return id;
        }
        catch(error){
            console.log(error);
        }
    };

    async getById(id){
        try{
            let contenidoDos = await fs.promises.readFile(`./desafios/desafioDos/${this.name}`, 'utf-8');
            let contenidoDosJson = JSON.parse(contenidoDos);
            let contenidoExtraidoDelArray
            contenidoDosJson.forEach(element => {
                if(element.id == id){
                    contenidoExtraidoDelArray = element;
                }
            });
            return contenidoExtraidoDelArray;
        }
        catch(error){
            console.log(error);
        }
    }

    async getAll(){
        let contenidoTres = await fs.promises.readFile(`./desafios/desafioDos/${this.name}`, 'utf-8');
        let contenidoTresJson = JSON.parse(contenidoTres);
        return contenidoTresJson;
    }

    async deleteById(id){
        try{
            let contenidoCuatro = await fs.promises.readFile(`./desafios/desafioDos/${this.name}`, 'utf-8');
            let contenidoCuatroJson = JSON.parse(contenidoCuatro);
            let posicion = contenidoCuatroJson.findIndex(element => element.id == id)
            if(posicion >= 0){
                contenidoCuatroJson.splice(posicion, 1)
                await fs.promises.writeFile(`./desafios/desafioDos/${this.name}`, JSON.stringify(contenidoCuatroJson));
            }
            return contenidoCuatroJson
        }
        catch(error){
            console.log(error);
        }
    }

    async deleteAll(){
        await fs.promises.writeFile(`./desafios/desafioDos/${this.name}`, JSON.stringify([]));
        let contenidoCincoJson = await fs.promises.readFile(`./desafios/desafioDos/${this.name}`, 'utf-8');
        return contenidoCincoJson;
    }
}

let contenedor = new Contenedor("productos.json")

let informacionNueva = {
        "id": 4,
        "title": "Tijeras",
        "price": 213.76
    }

contenedor.save(informacionNueva).then(res =>{
    console.log(res);
});

contenedor.getById(2).then(result =>{
    console.log(result);
});

contenedor.getAll().then(resultado =>{
    console.log(resultado);
});

contenedor.deleteById(4).then(re =>{
    console.log(re);
});

// contenedor.deleteAll().then(r =>{
//     console.log(r);
// });