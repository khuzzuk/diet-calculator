import Entity, {RegisterEntity} from "../Entity";
import Meal from "./Meal";
import Portion from "./Portion";
import Product from "./Product";

export default class Consumption extends Entity {
  static entityName: string = 'consumption';

  date = Date.now();
  product: Product;
  portion: Portion;
  meal: Meal;
  amount: number = 1;

  updateWith(entity: *): Consumption {
    this.updateProp(entity, 'amount');
    this.updateProp(entity, 'date');
    this.updateEntityProp(entity, 'product', () => new Product());
    this.updateEntityProp(entity, 'portion', () => new Portion());
    this.updateEntityProp(entity, 'meal', () => new Meal());
    return this;
  }
}

RegisterEntity(Consumption, [], []);