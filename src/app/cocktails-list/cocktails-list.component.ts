import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../cocktail';
import { COCKTAILS } from '../mock-cocktails';
//import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  cocktails = COCKTAILS;
  selectedCocktail: Cocktail;
  
  

  constructor() { }
 
  ngOnInit() {
    
  }
 
  onSelect(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
  }

  

}
