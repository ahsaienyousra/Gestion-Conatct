import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ContactService } from './../services/contact.service';
import { Router } from '@angular/router';
import { contactApp } from '../services/in-memory-data.service';
import { noUndefined } from '@angular/compiler/src/util';

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
    this.contactForm = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      datenaissance: new FormControl(),
      address: builder.array([])

      /*       address: new FormGroup({
              typeAdresse: new FormControl(''),
              typeVoie: new FormControl(''),
              rue: new FormControl(''),
              numero: new FormControl(''),
              ville: new FormControl(''),
              cp: new FormControl(''),
              pays: new FormControl(''),
              commentaire: new FormControl(''),
              contactNo: new FormControl(''),
            }) */

    });
  }

  ngOnInit() {

    this.adressArray = [];
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
    (this.contactForm.get("address") as FormArray).push(
      this.builder.group({
        typeAdresse: new FormControl(''),
        typeVoie: new FormControl(''),
        rue: new FormControl(''),
        numero: new FormControl(''),
        ville: new FormControl(''),
        cp: new FormControl(''),
        pays: new FormControl(''),
        commentaire: new FormControl(''),
        contactNo: new FormControl('')
      })
    )
  }

  get address() {
    return this.contactForm.get("address") as FormArray;
  }
  AddContact() {
    console.log(this.contactForm.get('address.typeAdresse'))

    if (this.contactForm.invalid)
      return

    let contact: contactApp = new contactApp(this.contactForm.controls.nom.value, this.contactForm.controls.prenom.value
      , this.contactForm.controls.datenaissance.value, [this.typeAdresse.value, this.typeVoie.value, this.rue.value,
      this.numero.value, this.ville.value, this.cp.value, this.pays.value, this.commentaire.value, this.contactNo.value], undefined)

    this.contactService.AddContact(contact).subscribe((response) => {
      this.router.navigate(["/contacts"])
    })

  }
}
