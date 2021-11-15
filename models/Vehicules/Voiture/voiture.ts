import { Moteur } from "../../Moteurs/moteur";
import { Vehicule } from "../vehicule";

export class Voiture extends Vehicule {
    modele : string;
    annee : number;
    //Constructeur avec arguments
    constructor(marque : string, couleur : string, prix : number, moteur : Moteur, modele : string, annee : number) {
        super(marque, couleur, prix, moteur);
        this.modele = modele;
        this.annee = annee;
    }
    covoiturer() {
        console.log("Cette voiture fait du covoit !");
    }
}