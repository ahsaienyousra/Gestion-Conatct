import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  template: `{{mylist | json}}`,
})
export class ContactDetailComponent implements OnInit {
  mylist: any;

  constructor(private contactService: ContactService,private dataService:DataService) {
    this.dataService.currentData.subscribe(data=>{
      this.mylist = data;
    })
    this.mylist = this.contactService.mylist;
   }

  ngOnInit(): void {
    console.log(this.mylist)
  }

}
