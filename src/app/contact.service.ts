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
}
