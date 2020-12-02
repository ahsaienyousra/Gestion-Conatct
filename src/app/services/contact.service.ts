import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contactApp } from './in-memory-data.service';
import { catchError } from 'rxjs/operators';
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public mylist : any[] = [];

  constructor(private http: HttpClient ) { }

  getContacts():Observable<contactApp[]>{
    return this.http.get<contactApp[]>('api/contacts')
  }
  AddContact(contactApp: contactApp){
    return this.http.post('api/contacts', contactApp, cudOptions).pipe(catchError(err=>{
      console.log(err)
      return of(err)
      }))
  }
  UpdateContact(contactApp: contactApp){
    return this.http.put('api/contacts', contactApp)
  }
  DeleteContact(id:number){
    return this.http.delete(`api/contact/?${id}`);
  }

  getContactById(id: number):Observable<contactApp[]>{
    return this.http.get<contactApp[]>(`api/contact/?${id}`);
  }
}
