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

  contactsList: any;
  value:any={};
  columnDefs = [
    { field: 'nom',  headerName:'Nom',sortable: true, filter: true, checkboxSelection: true },
    { field: 'prenom', sortable: true, filter: true },
    { field: 'datenaissance', sortable: true, filter: true }
  ];
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;


  constructor(private contactService: ContactService,private activateRoute: ActivatedRoute, private router: Router, private dataService:DataService) {
    this.dataService.currentData.subscribe(data =>{
      this.value = data;
    })
    //this.contactService.mylist;
  }

  ngOnInit():void {
    this.getContacts();
    
  /*  let id = this.activateRoute.snapshot.params['id']
    this.contactService.getContactById(id).subscribe((response)=>{
      console.log(response) 
      this.selectedContactDetails = response;
    })
  */
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
  onDeleteRow(){
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.applyTransaction({ remove: selectedData });
    return(res);
  }
  getSelectedRowData(event?:any) {
    let selectedData=event.data;
    this.dataService.changeData([selectedData])
    console.log(selectedData)
  } 
 
}
