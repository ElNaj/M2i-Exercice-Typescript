import { Moteur } from "../moteur";

export class MoteurElectrique extends Moteur {
    tempsChargement : number;
    batterie : string;
    //Constructeur avec arguments
    constructor(vitesse : number, km : number, tempsChargement : number, batterie : string) {
        super(vitesse, km);
        this.tempsChargement = tempsChargement;
        this.batterie = batterie;
    }
    demarrage() {
        console.log("Moteur Essence allumé!");
    }
    recharger() {
        console.log("Le moteur électrique ça se recharge !");
    }
}