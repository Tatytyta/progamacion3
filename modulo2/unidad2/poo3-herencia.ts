class Vehiculo {
    public marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    moverse(): void {
        console.log(`La marca ${this.marca} se está moviendo.`);
    }
}

class Moto extends Vehiculo {
    hacerCaballito(): void {
        console.log(`La marca ${this.marca} hacer caballito.`);
    }
}

const miVehiculo = new Vehiculo("Toyota");
miVehiculo.moverse(); 
const miMoto = new Moto("Yamaha");
miMoto.hacerCaballito();