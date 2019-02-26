import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
// @Output() recipeSelected = new EventEmitter<void>();
@Input() recipe: Recipe;
  constructor(private recipeServive: RecipeService) { }
  onSelected() {
 this.recipeServive.recipeSelected.emit(this.recipe);
  }
  ngOnInit() {
  }

}