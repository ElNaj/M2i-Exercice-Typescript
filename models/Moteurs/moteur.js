"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    //Constructeur avec arguments
    function Moteur(vitesse, km) {
        this._vitesse = vitesse;
        this._km = km;
    }
    Object.defineProperty(Moteur.prototype, "vitesse", {
        //Getters et setters
        get: function () {
            return this._vitesse;
        },
        set: function (vitesse) {
            this._vitesse = vitesse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moteur.prototype, "km", {
        get: function () {
            return this._km;
        },
        set: function (km) {
            this._km = km;
        },
        enumerable: false,
        configurable: true
    });
    return Moteur;
}());
exports.Moteur = Moteur;
