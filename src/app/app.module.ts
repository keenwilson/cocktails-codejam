import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CocktailComponent } from './cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CocktailsListComponent,
    HeaderComponent,
    AboutComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
