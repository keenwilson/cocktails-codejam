import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CocktailsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
