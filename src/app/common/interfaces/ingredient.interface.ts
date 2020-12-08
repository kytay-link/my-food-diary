import {IngredientUnit} from './unit.enum';

/**
 * @typedef Ingredient
 * @property
 */
export interface Ingredient {
  name: string;
  unitSize: number;
  unitType: IngredientUnit;
};

export interface CookedIngredient extends Ingredient {
  prepared: CookedIngredient;
}
