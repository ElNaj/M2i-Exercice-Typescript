import { Moteur } from "../moteur";

export class MoteurEssence extends Moteur {
    carburant : string;
    tsi : boolean;
    //Constructeur avec arguments
    constructor(vitesse : number, km : number, cardurant : string, tsi : boolean) {
        super(vitesse, km);
        this.carburant = cardurant;
        this.tsi = tsi;
    }
    demarrage() {
        console.log("Moteur Essence allumé!");
    }
    polluer() {
        console.log("L'essence ça pollue aussi ");
    }
}