import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  addresses:any[]=[];
  contact:any;
  constructor(private contactService: ContactService,private dataService:DataService,private route:Router) {
    this.dataService.currentData.subscribe(data=>{
      this.mylist = data;
      this.refresh();
    })
    this.mylist = this.contactService.mylist;
   }
   refresh(){
      this.contact=this.mylist[0];
   }

   delete(){
      this.contactService.DeleteContact(this.contact.id).subscribe(res=>{
        this.route.navigate(["/contacts"]);
        this.dataService.changeData(this.mylist);
      })
   }
   modifier(){
    this.route.navigate(["/edit/"+this.contact.id]);
  }

  ngOnInit(): void {
    console.log(this.mylist)
  }

}
