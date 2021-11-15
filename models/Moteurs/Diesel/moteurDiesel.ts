import { Moteur } from "../moteur";

export class MoteurDiesel extends Moteur {
    carburant : string;
    tdi : boolean;
    //Constructeur avec arguments
    constructor(vitesse : number, km : number, cardurant : string, tdi : boolean) {
        super(vitesse, km);
        this.carburant = cardurant;
        this.tdi = tdi;
    }
    demarrage() {
        console.log("Moteur Diesel allumé!");
    }
    polluer() {
        console.log("Le diesel ça pollue");
    }
}