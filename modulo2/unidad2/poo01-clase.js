class cuentaBancaria {
    _saldo;
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    depositar(cantidad) {
        this._saldo += cantidad;
    }
    retirar(cantidad) {
        if (cantidad <= this._saldo) {
            this._saldo -= cantidad;
        } else {
            console.log("Fondos insuficientes ");
        }
    }
    getSaldo() {
        return this._saldo;
    }
}
const cuenta = new cuentaBancaria(1000);
console.log(cuenta.getSaldo());
cuenta.depositar(500);
console.log(cuenta.getSaldo());
cuenta.retirar(2000);
cuenta.retirar(100);
console.log(cuenta.getSaldo());



//TRABAJO 
class Biblioteca {
    _librosDisponibles;
    
    constructor(cantidadInicial) {
        this._librosDisponibles = cantidadInicial;
    }

    agregar(cantidad) {
        this._librosDisponibles += cantidad;
    }

    prestar(cantidad) {
        if (cantidad <= this._librosDisponibles) {
            this._librosDisponibles -= cantidad;
        } else {
            console.log("Libros insuficientes ");
        }
    }

    getLibrosDisponibles() {
        return this._librosDisponibles;
    }
}

const biblioteca = new Biblioteca(1000);
console.log(biblioteca.getLibrosDisponibles());
biblioteca.agregar(500);
console.log(biblioteca.getLibrosDisponibles());
biblioteca.prestar(2000);
biblioteca.prestar(100);
console.log(biblioteca.getLibrosDisponibles());