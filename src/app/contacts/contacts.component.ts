import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { Router, RouterState, RouterLink, ActivatedRoute } from '@angular/router';

import { ContactService } from '../services/contact.service';
import { contactApp } from '../services/in-memory-data.service';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private gridApi: any;

  contactsList: any[]=[];
  value:any={};
  columnDefs = [
    { field: 'nom',  headerName:'Nom',sortable: true, filter: true, checkboxSelection: true },
    { field: 'prenom', headerName:'Prenom',sortable: true, filter: true },
    { field: 'datenaissance', headerName:'Date de Naissance',sortable: true, filter: true },
    { field: 'contactNo', headerName:'Numéro Télé',sortable: true, filter: true }
  ];
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;


  constructor(private contactService: ContactService,private activateRoute: ActivatedRoute, private router: Router, private dataService:DataService) {
    this.dataService.currentData.subscribe(data =>{
      this.value = data;
      this.getContacts()
    })
  }

  ngOnInit():void {
    this.getContacts();
  }
  onGridReady(params: { api: any; }) {
    this.gridApi = params.api;
}
  getContacts():void{
    this.contactService.getContacts().subscribe((res: contactApp[])=>{
      console.log(res);
      this.contactsList=res;
      this.refresh()
    });
  }

  refresh(){
    let list:any[]=this.contactsList;
    for(let contact of list){
      contact.contactNo = contact.adresse[0].contactNo
    }
    this.contactsList=list;
  }
  onDeleteRow(){
    let selectedData = this.gridApi.getSelectedRows();
    let res = this.gridApi.applyTransaction({ remove: selectedData });
    for(let s of selectedData){
      this.contactService.DeleteContact(s.id).subscribe((res:any)=>{
        console.log(res)
      })
    }
    return(res);
  }
  getSelectedRowData(event?:any) {
    let selectedData=event.data;
    this.dataService.changeData([selectedData])
    console.log(selectedData)
  } 

  EditContact(event?:any){
    this.router.navigate(["/edit/"+event.data.id])
  }
 
}
