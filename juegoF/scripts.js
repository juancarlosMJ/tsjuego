"use strict";
var jugador = /** @class */ (function () {
    //es pesioficamos el  tipo  de tado
    function jugador(nombre) {
        //creamos nuestas tipado de variables  
        this.vida = 100;
        this.pomada = 100;
        this.rayos = 50;
        this.nombre = "";
        this.sol = 100;
        this.golpe = 20;
        this.nombre = nombre;
    }
    jugador.prototype.atacar = function (jugadorObjetivo) {
        if (jugadorObjetivo > 100) {
            console.log('tienes mucha vida jajaja');
        }
        else {
            jugadorObjetivo.vida -= this.pomada;
            console.log('estubo serca casi te vas al panteon');
        }
        this.status(jugadorObjetivo);
    };
    jugador.prototype.matar = function (jugadorObjetivo) {
        jugadorObjetivo.vida.pomada -= this.rayos;
        console.log('adios');
        this.status(jugadorObjetivo);
    };
    jugador.prototype.curar = function (jugadorObjetivo) {
        if (this.pomada > 100) {
            console.log('andas al 100');
            this.status(jugadorObjetivo);
        }
    };
    jugador.prototype.status = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return jugador;
}());
var superman = new jugador('superman');
var batman = new jugador('batman');
console.log(superman);
console.log(batman);
