class animal {
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    emitirSonido(): void {
        console.log(`Sonido del animal`);
    }
}

class Gato extends animal {
    emitirSonido(): void {
        console.log(`Miau`);
    }
}

class vaca extends animal {
    emitirSonido(): void {
        console.log(`Muu`);
    }
}

const miGato = new Gato("hello kitty");
miGato.emitirSonido(); 
const mivaca = new vaca("lechera");
mivaca.emitirSonido();