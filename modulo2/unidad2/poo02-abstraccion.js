class Television {
    _marca
    _encendido
    constructor(marca){
        this._marca = marca;
        this._encendido = false;
    }
    encender(){
        this._encendido = true;
        console.log("televisión encendida");
    }
    apagar(){
        this._encendido = false;
        console.log("televisión apagada");
    }
}

const miTV = new Television("Samsung");
miTV.encender();
miTV.apagar();


//TRABAJO 
class Biblioteca {
    _nombre
    _abierto
    constructor(nombre){
        this._nombre = nombre;
        this._abierto = false;
    }
    abrir(){
        this._abierto = true;
        console.log("biblioteca abierta");
    }
    cerrar(){
        this._abierto = false;
        console.log("biblioteca cerrada");
    }
}

const miBiblioteca = new Biblioteca("Central");
miBiblioteca.abrir();
miBiblioteca.cerrar();