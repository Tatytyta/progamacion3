class Calculadora{
    sumar(a, b, c){
        if (c===undefined){
            console.log(`suma de dos 2números: ${a+b}`); 
        } else {
            console.log(`suma de tres números: ${a+b+c}`);
        }
    }
    multiplicar(x, y=1, z=3){
        console.log(`Resultado ${x*y*z}`);
    }
}

const calc = new Calculadora();
calc.sumar(2, 3);
calc.sumar(2, 3, 4);
calc.multiplicar(2);
calc.multiplicar(2, 3);
calc.multiplicar(2, 3, 4);

//TRABAJO
class Biblioteca {
    prestar(libro, usuario, dias) {
        if (dias === undefined) {
            console.log(`Préstamo estándar: ${libro} para ${usuario}`);
        } else {
            console.log(`Préstamo especial: ${libro} para ${usuario} por ${dias} días`);
        }
    }

    reservar(titulo, sala = "General", cantidad = 1) {
        console.log(`Reserva: ${cantidad} copias de ${titulo} en sala ${sala}`);
    }
}

const biblio = new Biblioteca();
biblio.prestar("Don Quijote", "Juan");
biblio.prestar("Cien años de soledad", "María", 7);
biblio.reservar("El Principito");
biblio.reservar("Harry Potter", "Infantil");
biblio.reservar("La Odisea", "Clásicos", 3);