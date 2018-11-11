import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD

=======
>>>>>>> 2ee984de95bd5fcb2587080da47464257795e235

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
