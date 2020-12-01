import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'add', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
