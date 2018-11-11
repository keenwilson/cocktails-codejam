import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CocktailsListComponent }      from './cocktails-list/cocktails-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cocktails', component: CocktailsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
