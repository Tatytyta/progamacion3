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
var Trabajador = /** @class */ (function () {
    function Trabajador(nombre) {
        this.nombre = nombre;
    }
    Trabajador.prototype.saludoTrabajador = function () {
        console.log("Hola ".concat(this.nombre));
    };
    return Trabajador;
}());
var obrero = /** @class */ (function (_super) {
    __extends(obrero, _super);
    function obrero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    obrero.prototype.calculoSueldo = function (salarioDiario) {
        console.log("Porcentaje horas extra:", salarioDiario * 0.05);
    };
    return obrero;
}(Trabajador));
var medico = /** @class */ (function (_super) {
    __extends(medico, _super);
    function medico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    medico.prototype.calculoSueldo = function (salarioDiario) {
        console.log("Porcentaje horas extra:", salarioDiario * 0.1);
    };
    return medico;
}(Trabajador));
var elmedico = new medico("Dr.Chapatin");
elmedico.calculoSueldo(15);
var carpintero = new obrero("Pinocho");
carpintero.calculoSueldo(10);
