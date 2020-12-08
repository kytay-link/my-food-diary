import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CookedIngredient, Ingredient} from '../../common/interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  getIngredientsBySimilarName(name: string): Ingredient[]{
    return [];
  }

  addIngredient(ingrdient: Ingredient | CookedIngredient): void{

  }


}
