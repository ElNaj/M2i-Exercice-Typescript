import { MoteurDiesel } from "../Moteurs/Diesel/moteurDiesel";
import { Moteur } from "../Moteurs/moteur";
import { StationEssence } from "../StationEssence/stationEssence";

export class Vehicule {
    private _marque : string;
    private _couleur : string;
    private _prix : number;
    private _moteur : Moteur;
    //Constructeur avec arguments
    constructor(marque : string, couleur : string, prix : number, moteur : Moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }
    accelerer() {
        console.log("Grosse accèle !!");
    }
    passageStationEssence() {
        console.log(StationEssence.plein);
    }
    //Getters et setters
    get marque() {
        return this._marque;
    }
    get couleur() {
        return this._couleur;
    }
    get prix() {
        return this._prix;
    }
    get moteur() {
        return this._moteur;
    }
    set marque(marque : string) {
        this._marque = marque;
    }
    set couleur(couleur : string) {
        this._couleur = couleur;
    }
    set prix(prix : number) {
        this._prix = prix;
    }
    set moteur(moteur : Moteur) {
        this._moteur = moteur;
    }
}