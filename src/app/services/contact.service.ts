import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactApp } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient ) { }

  getContacts():Observable<contactApp[]>{
    return this.http.get<contactApp[]>('api/contacts')
  }
  AddContact(contactApp: contactApp){
    return this.http.post('api/contacts', contactApp)
  }
  UpdateContact(contactApp: contactApp){
    return this.http.put('api/contacts', contactApp)
  }
  DeleteContact(id:number){
    return this.http.delete(`api/contacts/?${id}`);
  }

  getContactById(id: number):Observable<contactApp[]>{
    return this.http.get<contactApp[]>(`api/contacts/?${id}`);
  }
}
