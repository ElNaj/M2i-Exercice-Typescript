import { MoteurDiesel } from "./Moteurs/Diesel/moteurDiesel";
import { MoteurEssence } from "./Moteurs/Electrique/moteurEssence";
import { MoteurElectrique } from "./Moteurs/Essence/moteurElectrique";
import { Moteur } from "./Moteurs/moteur";
import { Camion } from "./Vehicules/Camion/camion";
import { Moto } from "./Vehicules/Moto/moto";
import { Vehicule } from "./Vehicules/vehicule";
import { Voiture } from "./Vehicules/Voiture/voiture";

console.log("Bienvenue chez NaGine, usine de moteurs tout genre et véhicules toutes marques!");

//On initialise les moteurs
let moteurDiesel : MoteurDiesel = new MoteurDiesel(100, 50, "Gazoil", true);
console.log(moteurDiesel);
moteurDiesel.polluer();
let moteurElec : MoteurElectrique = new MoteurElectrique(80, 30, 4.5, "Lithium");
console.log(moteurElec);
moteurElec.recharger();
let moteurEss : MoteurEssence = new MoteurEssence(120, 40, "SP 95", true);
console.log(moteurEss);
moteurEss.demarrage();

//On initialise les véhicules
let voiture :  Voiture = new Voiture("Citroën", "Bleu", 15000, moteurEss, "DS4", 2012);
//Verif
console.log(voiture);
voiture.covoiturer();
voiture.moteur.demarrage();
let camion : Camion = new Camion("MAN", "Blanc", 50000, moteurDiesel, "Destructor", 2016);
console.log(camion);
camion.remorquer();
camion.moteur.demarrage();
let moto : Moto = new Moto("Ducati", "Rouge", 20000, moteurElec, "860 E Concept", 2025);
console.log(moto);
moto.cabrer();
moto.moteur.demarrage();

//Bonus Faire le plein
console.log("Passage station voiture : ");
voiture.passageStationEssence();
console.log("Passage station moto : ");
moto.passageStationEssence();
console.log("Passage station camion : ");
camion.passageStationEssence();
console.log("C'est la fin de notre catalogue..");