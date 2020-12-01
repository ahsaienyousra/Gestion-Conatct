import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  contactForm!: FormGroup;
  address!: FormGroup;
  

  constructor(private contactService: ContactService, private router:Router) { }

  ngOnInit(){
    this.contactForm=new FormGroup({
      nom: new FormControl(),
      prenom:new FormControl(),
      datenaissance:new FormControl(),
      address: new FormGroup({
        typeAdresse: new FormControl(''),
        typeVoie: new FormControl(''),
        rue: new FormControl(''),
        numero: new FormControl(''),
        ville: new FormControl(''),
        cp: new FormControl(''),
        pays: new FormControl(''),
        commentaire: new FormControl(''),
        contactNo: new FormControl(''),
      })
  
    });
  }
  AddContact(){
    if(this.contactForm.invalid)
    return

    /*  let contact: contactApp = new contactApp(5, this.contactForm.controls.nom.value, this.contactForm.controls.prenom.value
      , this.contactForm.controls.datenaissance.value, [this.contactForm.controls.address.typeAdresse.value,this.address.controls.typeVoie.value, this.address.controls.rue.value,
        this.address.controls.numero.value,this.address.controls.ville.value,this.address.controls.cp.value,this.address.controls.pays.value,this.address.controls.commentaire.value,this.address.controls.contactNo.value ]) */
/* 
     this.contactService.AddContact(contact).subscribe((response)=>{
       this.router.navigate(["/contacts"]) */
    /*  }) */
  }

}
