"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoteurElectrique = void 0;
var moteur_1 = require("../moteur");
var MoteurElectrique = /** @class */ (function (_super) {
    __extends(MoteurElectrique, _super);
    //Constructeur avec arguments
    function MoteurElectrique(vitesse, km, tempsChargement, batterie) {
        var _this = _super.call(this, vitesse, km) || this;
        _this.tempsChargement = tempsChargement;
        _this.batterie = batterie;
        return _this;
    }
    MoteurElectrique.prototype.demarrage = function () {
        console.log("Moteur Essence allumé!");
    };
    MoteurElectrique.prototype.recharger = function () {
        console.log("Le moteur électrique ça se recharge !");
    };
    return MoteurElectrique;
}(moteur_1.Moteur));
exports.MoteurElectrique = MoteurElectrique;
