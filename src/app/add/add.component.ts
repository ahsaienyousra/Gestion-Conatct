import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ContactService } from './../services/contact.service';
import { Router } from '@angular/router';
import { contactApp } from '../services/in-memory-data.service';
import { noUndefined } from '@angular/compiler/src/util';
import { Adresse } from '../Adresse';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contactForm: FormGroup;
 // address!: FormGroup;

  adressArray!: {
    typeAdresse?: string;
    typeVoie?: string;
    rue?: string;
    numero?: number;
    ville?: string;
    cp?: number;
    pays?: string;
    commentaire?: string;
    contactNo?: string;
  }[];



  constructor(private builder: FormBuilder, private contactService: ContactService, private router: Router) {
    this.contactForm = builder.group({
      nom: builder.control("",Validators.required),
      prenom: builder.control("",Validators.required),
      datenaissance: builder.control(""),
      addresses!: builder.array([])
    });
  }

  ngOnInit() {

    this.adressArray = [];
  }

  get nom(){
    return this.contactForm.get("nom");
  }
  get typeAdresse(): any {
    return this.contactForm.get('address.typeAdresse');
  }
  get typeVoie(): any {
    return this.contactForm.get('address.typeVoie');
  }
  get rue(): any {
    return this.contactForm.get('address.rue');
  }
  get numero(): any {
    return this.contactForm.get('address.numero');
  }
  get ville(): any {
    return this.contactForm.get('address.ville');
  }
  get cp(): any {
    return this.contactForm.get('address.cp');
  }
  get pays(): any {
    return this.contactForm.get('address.pays');
  }
  get commentaire(): any {
    return this.contactForm.get('address.commentaire');
  }
  get contactNo(): any {
    return this.contactForm.get('address.contactNo');
  }

  AddAdresse() {
    const address = {}
    this.adressArray.push(address);
    (this.contactForm.get("addresses") as FormArray).push(
      this.builder.group({
        typeAdresse: this.builder.control(""),
        typeVoie: this.builder.control(""),
        rue: this.builder.control(""),
        numero: this.builder.control(""),
        ville: this.builder.control(""),
        cp: this.builder.control(""),
        pays: this.builder.control(""),
        commentaire: this.builder.control(""),
        contactNo: this.builder.control("")
      })
    )
  }

  getAdresses(){
    this.adressArray.forEach((adress,i)=>{
      adress.typeAdresse = this.addresses.at(i).get("typeAdresse")!.value;
      adress.typeVoie = this.addresses.at(i).get("typeVoie")!.value;
      adress.rue = this.addresses.at(i).get("rue")!.value;
      adress.contactNo = this.addresses.at(i).get("contactNo")!.value;
      adress.cp = this.addresses.at(i).get("cp")!.value;
      adress.numero = this.addresses.at(i).get("numero")!.value;
      adress.pays = this.addresses.at(i).get("pays")!.value;
      adress.ville = this.addresses.at(i).get("ville")!.value;
      adress.commentaire = this.addresses.at(i).get("commentaire")!.value;
    })
    return this.adressArray
  }

  get addresses() {
    return this.contactForm.get("addresses") as FormArray;
  }
  AddContact() {
    console.log(this.contactForm.get('address.typeAdresse'))
    let adressesLocal:any[]=[];
    let data = {
      nom:this.contactForm.controls.nom.value,
      prenom:this.contactForm.controls.prenom.value,
      adresses:this.getAdresses()
    }
    for(let ad of this.getAdresses()){
      console.log(ad)
      adressesLocal.push(new Adresse(ad.typeAdresse,ad.typeVoie,ad.rue,ad.numero,ad.ville,ad.cp,ad.pays,ad.commentaire,ad.contactNo))
    }
    if (this.contactForm.invalid)
      return

    let contact: contactApp = new contactApp(
      this.contactForm.controls.nom.value, this.contactForm.controls.prenom.value,this.contactForm.controls.datenaissance.value, adressesLocal, undefined)

    this.contactService.AddContact(contact).subscribe((response) => {
      this.router.navigate(["/contacts"])
    })

  }
}
