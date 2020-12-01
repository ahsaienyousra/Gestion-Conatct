import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { Router, RouterState, RouterLink, ActivatedRoute } from '@angular/router';

import { ContactService } from '../services/contact.service';
import { contactApp } from '../services/in-memory-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private gridApi: any;




  constructor(private contactService: ContactService,private activateRoute: ActivatedRoute, private router: Router) { }

  contactsList: any;

  columnDefs = [
    { field: 'nom',  headerName:'Nom',sortable: true, filter: true, checkboxSelection: true },
    { field: 'prenom', sortable: true, filter: true },
    { field: 'datenaissance', sortable: true, filter: true },
    { field: 'adresse.typeAdresse', sortable: true, filter: true },
    { field: 'adresse.contactNo',  headerName: 'test' ,sortable: true, filter: true }

];
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;
 
  ngOnInit():void {
    this.getContacts();
   /*  let id = this.activateRoute.snapshot.params['id']
    this.contactService.getContactById(id).subscribe((response)=>{
      console.log(response) */
    //  this.selectedContactDetails = response;
    //})
  }
  onGridReady(params: { api: any; }) {
    this.gridApi = params.api;
}
  getContacts():void{
    this.contactService.getContacts().subscribe((res: contactApp[])=>{
      console.log(res);
      this.contactsList=res;
    });
  }
   onDeleteRow()
   {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.applyTransaction({ remove: selectedData });
    return(res);
  } 

  
}
