import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Adresse } from './../Adresse';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let contacts = [
    new contactApp("AHSAIEN","YOUSRA","13/11/1996", [ 
      new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",4,"BREST",29200,"FRANCE","COMMENTAIRE","+33 6 64 86 90 81"),
      new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",4,"BREST",29200,"FRANCE","COMMENTAIRE","+33 6 64 86 90 81")
    ],1),
    new contactApp("AHSAIENE","OMAR","06/02/2013",[new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",4,"LYON",29200,"FRANCE","COMMENTAIRE","+33 6 64 86 90 81")],2),
    new contactApp("CHBAB","Khalid","01/01/1998",[new Adresse("TRAVAIL","RUE","RUE DES ARCHIVES",4,"PARIS",29200,"FRANCE","COMMENTAIRE","+212 6 06 89 31 12")],3),
    new contactApp("TEST","TEST","06/02/2013",[new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",5,"BREST",29200,"FRANCE","COMMENTAIRE","+33 6 64 66 88 00")],4),
    new contactApp("MARK","Xavier","06/02/2013",[new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",6,"TANGER",29200,"MAROC","COMMENTAIRE","+33 6 64 86 90 12")],5),
    new contactApp("Phillipe","SALIOU","06/02/1960",[new Adresse("TRAVAIL","RUE","RUE DES ARCHIVES",5,"ROANNE-LYON",29200,"FRANCE","COMMENTAIRE","+34 6 64 86 90 33")],6),

    ];
    return {contacts};

  }
  genId(contacts: contactApp[]) {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id!)) + 1 : 2;
  }
  }
  export class contactApp{
    id?: number
    nom: string
    prenom: string
    datenaissance:string
    adresse:Adresse[]

    constructor( nom: string,prenom: string,datenaissance:string,adresse:Adresse[],id?: number) { 
      this.id=id
      this.nom=nom
      this.prenom=prenom
      this.datenaissance=datenaissance
      this.adresse=adresse
    }

  }

