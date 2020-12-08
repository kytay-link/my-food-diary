import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MealEntry } from '../../common/interfaces/meal-entry';

@Injectable({
  providedIn: 'root'
})
export class MealEntryService {

  constructor(private http: HttpClient) { }

  getMeals(): MealEntry[] {
    return [];
  }

  addMeal(mealEntry: MealEntry): void {

  }

  editMeal(mealEntry: MealEntry): void {

  }

  deleteMeal(mealEntry: MealEntry): void {

  }
}
