class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const ana = new Persona("Ana", 30);
ana.saludar();


//trabajo  
class usuario {
    nombre: string;
    id: number;
    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y mi id es ${this.id} .`);
    }
}

const maria = new usuario ("maria", 12545450);
maria.saludar();