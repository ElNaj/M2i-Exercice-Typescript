"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moteurDiesel_1 = require("./models/Moteurs/Diesel/moteurDiesel");
var moteurEssence_1 = require("./models/Moteurs/Electrique/moteurEssence");
var moteurElectrique_1 = require("./models/Moteurs/Essence/moteurElectrique");
var camion_1 = require("./models/Vehicules/Camion/camion");
var moto_1 = require("./models/Vehicules/Moto/moto");
var voiture_1 = require("./models/Vehicules/Voiture/voiture");
console.log("Bienvenue chez NaGine, usine de moteurs tout genre et véhicules toutes marques!");
//On initialise les moteurs
var moteurDiesel = new moteurDiesel_1.MoteurDiesel(100, 50, "Gazoil", true);
console.log(moteurDiesel);
moteurDiesel.polluer();
var moteurElec = new moteurElectrique_1.MoteurElectrique(80, 30, 4.5, "Lithium");
console.log(moteurElec);
moteurElec.recharger();
var moteurEss = new moteurEssence_1.MoteurEssence(120, 40, "SP 95", true);
console.log(moteurEss);
moteurEss.demarrage();
//On initialise les véhicules
var voiture = new voiture_1.Voiture("Citroën", "Bleu", 15000, moteurEss, "DS4", 2012);
//Verif
console.log(voiture);
voiture.covoiturer();
voiture.moteur.demarrage();
var camion = new camion_1.Camion("MAN", "Blanc", 50000, moteurDiesel, "Destructor", 2016);
console.log(camion);
camion.remorquer();
camion.moteur.demarrage();
var moto = new moto_1.Moto("Ducati", "Rouge", 20000, moteurElec, "860 E Concept", 2025);
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
