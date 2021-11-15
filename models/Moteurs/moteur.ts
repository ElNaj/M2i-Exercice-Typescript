export abstract class Moteur {
    private _vitesse : number;
    private _km : number;

    //Constructeur avec arguments
    constructor(vitesse : number, km : number) {
        this._vitesse = vitesse;
        this._km = km;
    }
    demarrage() {
        console.log("Moteur allumé!");
    }

    //Getters et setters
    get vitesse() {
        return this._vitesse;
    }
    get km() {
        return this._km;
    }
    set vitesse(vitesse : number) {
        this._vitesse = vitesse;
    }
    set km(km : number) {
        this._km = km;
    }
}