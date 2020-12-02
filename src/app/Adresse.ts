import { NumberSymbol } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Adresse {
    private typeAdresse?: string;
    private typeVoie?: string;
    private rue?: string;
    private numero?: number;
    private ville?: string;
    private cp?: number;
    private pays?: string;
    private commentaire?: string;
    private contactNo?: string;

    constructor(typeAdresse?: string, typeVoie?: string, rue?: string, numero?: number, ville?: string, cp?: number, pays?: string, commentaire?: string, contactNo?: string) {
        this.typeAdresse = typeAdresse;
        this.typeVoie = typeVoie;
        this.rue = rue;
        this.numero = numero;
        this.ville = ville;
        this.cp = cp;
        this.pays = pays;
        this.commentaire = commentaire;
        this.contactNo = contactNo;
    }

    public get getTypeAdresse() {
        return this.typeAdresse;
    }
    public set setTypeAdresse(type: string){
        this.typeAdresse=type;
    }
    public get getTypeVoie() {
        return this.typeVoie;
    }
    public set settypeVoie(type: string){
        this.typeVoie=type;
    }
    public get getRue() {
        return this.rue;
    }
    public set setRue(rue: string){
        this.rue=rue;
    }
    public get getNumero() {
        return this.numero;
    }
    public set setNumero(num: number){
        this.numero=num;
    }
    public get getVille() {
        return this.ville;
    }
    public set setVille(ville: string){
        this.ville=ville;
    }
    public get getCp() {
        return this.cp;
    }
    public set setCp(cp: number){
        this.cp=cp;
    }
    public get getPays() {
        return this.pays;
    }
    public set setPays(pays: string){
        this.pays=pays;
    }
    public get getCommentaire() {
        return this.commentaire;
    }
    public set setCommentaire(commentaire: string){
        this.commentaire=commentaire;
    }
    public get getContactNo() {
        return this.contactNo;
    }
    public set setContactNo(contactNo: string){
        this.contactNo=contactNo;
    }

    

}