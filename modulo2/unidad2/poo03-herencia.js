class Animal {
    _nombre;
    constructor(nombre) {
        this._nombre = nombre;
    }
    hacerSonido() {
        console.log("Sonido Generico");
    }
}

class Perro extends Animal {
    caminar() {
        console.log("Perro caminando");
    }
}
const miPerro = new Perro("Firulais");
miPerro.hacerSonido(); 
miPerro.caminar(); 
const gato = new Animal("hello kitty");
gato.hacerSonido ();
//gato.caminar();



//TRABAJO 
class Biblioteca {
    _nombre;
    constructor(nombre) {
        this._nombre = nombre;
    }
    mostrarInfo() {
        console.log("Biblioteca genérica");
    }
}

class BibliotecaPublica extends Biblioteca {
    prestarLibro() {
        console.log("Préstamo de libro realizado");
    }
}

const miBiblioteca = new BibliotecaPublica("Central");
miBiblioteca.mostrarInfo();
miBiblioteca.prestarLibro();
const bibliotecaPrivada = new Biblioteca("Privada");
bibliotecaPrivada.mostrarInfo();