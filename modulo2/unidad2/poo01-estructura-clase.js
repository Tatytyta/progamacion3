var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
var ana = new Persona("Ana", 30);
ana.saludar();
//trabajo 
var usuario = /** @class */ (function () {
    function usuario(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    usuario.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y mi id es ").concat(this.id, " ."));
    };
    return usuario;
}());
var maria = new usuario("maria", 12545450);
maria.saludar();
