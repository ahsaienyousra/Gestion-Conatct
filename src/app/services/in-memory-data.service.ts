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
    const contacts = [
    new contactApp(1,"AHSAIEN","YOUSRA","13/11/1996", [ 
      new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",4,"BREST",29200,"FRANCE","COMMENTAIRE","+33 6 64 86 90 81"),
      new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",4,"BREST",29200,"FRANCE","COMMENTAIRE","+33 6 64 86 90 81")
    ]),
    new contactApp(2,"AHSAIEN","OMAR","06/02/2013",[new Adresse("DOMICILE","RUE","RUE DES ARCHIVES",4,"BREST",29200,"FRANCE","COMMENTAIRE","+33 6 64 86 90 81")])
    
    ];
    return {contacts};

  }
  genId(contacts: contactApp[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 2;
  }
  }
  export class contactApp{
    id: number
    nom: string
    prenom: string
    datenaissance:string
    adresse:Adresse[]

    constructor(id: number, nom: string,prenom: string,datenaissance:string,adresse:Adresse[]) { 
      this.id=id
      this.nom=nom
      this.prenom=prenom
      this.datenaissance=datenaissance
      this.adresse=adresse
    }

  }

