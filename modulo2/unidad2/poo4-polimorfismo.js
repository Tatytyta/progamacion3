var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(nombre) {
        this.nombre = nombre;
    }
    animal.prototype.emitirSonido = function () {
        console.log("Sonido del animal");
    };
    return animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.emitirSonido = function () {
        console.log("Miau");
    };
    return Gato;
}(animal));
var vaca = /** @class */ (function (_super) {
    __extends(vaca, _super);
    function vaca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    vaca.prototype.emitirSonido = function () {
        console.log("Muu");
    };
    return vaca;
}(animal));
var miGato = new Gato("hello kitty");
miGato.emitirSonido();
var mivaca = new vaca("lechera");
mivaca.emitirSonido();
