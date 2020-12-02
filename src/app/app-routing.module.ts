import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'add', component: AddComponent },
  { path: 'navbar', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
