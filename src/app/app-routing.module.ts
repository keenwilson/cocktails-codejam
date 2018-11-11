import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CocktailsListComponent }      from './cocktails-list/cocktails-list.component';

 
=======


import { CocktailsListComponent }      from './cocktails-list/cocktails-list.component';


>>>>>>> 2ee984de95bd5fcb2587080da47464257795e235

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cocktails', component: CocktailsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
