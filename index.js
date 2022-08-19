class Usuario {
    mascotas= []
    constructor(nombre, apellido, mascotas) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= [];
        this.mascotas= mascotas;
    }

    getFullName() {
        return `Hola. Mi nombre es ${this.nombre} ${this.apellido}.`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        // this.libros.push({nombre: nombre, autor: autor})
        this.libros.push({nombre, autor});
    }

    getBookNames(){
        let nombresLibros = [] //[array] - {objeto}
        this.libros.forEach((libro) => {
            console.log(libro.nombre);
            nombresLibros.push(libro.nombre);
        });
        return nombresLibros;
    }
};

const usuario = new Usuario("David", "De Carli", ["Lily"]);

console.log(usuario); 

console.log(usuario.getFullName());

usuario.addMascota("Vicent");
console.log(usuario.mascotas);
console.log(usuario.countMascotas());

usuario.addBook("Tilulo1", "Autor1");
usuario.addBook("Tilulo2", "Autor2");
usuario.addBook("Tilulo3", "Autor3");
console.log(usuario.getBookNames());



