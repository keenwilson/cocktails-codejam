import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../cocktail';
//import { COCKTAILS } from '../mock-cocktails';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  selectedCocktail: Cocktail;
  cocktails: Cocktail[];
 
  constructor(private cocktailService: CocktailService) { }
 
  ngOnInit() {
    this.getCocktails();
  }
 
  onSelect(cocktail: Cocktail): void {
    this.selectedCocktail = cocktail;
  }

}
