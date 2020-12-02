import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AddComponent } from './add/add.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { DataService } from './services/data.service';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule} from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddComponent,
    ContactDetailComponent,
    NavbarComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [DataService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
