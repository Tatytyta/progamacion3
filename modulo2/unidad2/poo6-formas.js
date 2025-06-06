//con una clase Figura cambiar el color de fondo de un divmetodo cambiaColor y cambia texto con metodo cambiaTexto
class Figura {
    _mensaje;
    constructor(_mensaje){
        this._mensaje=_mensaje;
    }
    cambiarColor(){
        const div = document.getElementById("divCambiante");
        div.textContent = this._mensaje;
    }

    cambiarTexto(){
        const div = document.getElementById("divCambiante");
        div.style.background = "skyblue";
    }
}
const figura = new Figura("Hello world");
document.getElementById("btnCambiarColor").addEventListener('click', () => {
    figura.cambiarColor
})
document.getElementById("btnCambiarTexto").addEventListener('click', () => {
    figura.cambiarTexto
});


//trabajo 
class Biblioteca {
    _mensaje;
    constructor(_mensaje){
        this._mensaje=_mensaje;
    }
    mostrarEstado(){
        const div = document.getElementById("divBiblioteca");
        div.textContent = this._mensaje;
    }

    cambiarTema(){
        const div = document.getElementById("divBiblioteca");
        div.style.background = "beige";
    }
}

const biblioteca = new Biblioteca("Biblioteca abierta");
document.getElementById("btnMostrarEstado").addEventListener('click', () => {
    biblioteca.mostrarEstado
})
document.getElementById("btnCambiarTema").addEventListener('click', () => {
    biblioteca.cambiarTema
});