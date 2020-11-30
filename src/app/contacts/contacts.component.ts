import { Component, OnInit } from '@angular/core';
import {Contact} from '../Contact';
import { ContactService } from '../contact.service';
import { contactApp } from '../in-memory-data.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  

  constructor(private contactService: ContactService) { }

  contactsList: any;

  ngOnInit():void {
    this.getContacts();
  }
  getContacts():void{
    this.contactService.getContacts().subscribe((res: contactApp[])=>{
      console.log(res);
      this.contactsList=res;
    });
  }
  columnDefs = [
    { field: 'nom', sortable: true, filter: true, checkboxSelection: true },
    { field: 'prenom', sortable: true, filter: true },
    { field: 'datenaissance', sortable: true, filter: true },
    { field: 'adresse.typeAdresse', sortable: true, filter: true },
    { field: 'adresse.contactNo', sortable: true, filter: true }

];
 
}
