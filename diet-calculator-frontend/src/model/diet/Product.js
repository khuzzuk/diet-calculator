import {FormFieldType} from "../../form/FormFieldType";
import Entity, {CreateColumn, CreateFormField, RegisterEntity} from "../Entity";

export default class Product extends Entity {
  static entityName: string = 'product';

  name: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrate: number;
  dietaryFiber: number;
  salt: number;
  carbon: number;
}

RegisterEntity(Product, [
  CreateColumn('name', FormFieldType.TEXT),
  CreateColumn('calories', FormFieldType.INTEGER),
  CreateColumn('proteins', FormFieldType.FLOAT),
  CreateColumn('fat', FormFieldType.FLOAT),
  CreateColumn('carbohydrate', FormFieldType.FLOAT),
  CreateColumn('dietaryFiber', FormFieldType.FLOAT),
  CreateColumn('salt', FormFieldType.FLOAT),
  CreateColumn('carbon', FormFieldType.FLOAT),
], [
  CreateFormField('name', FormFieldType.TEXT),
  CreateFormField('calories', FormFieldType.INTEGER),
  CreateFormField('proteins', FormFieldType.FLOAT),
  CreateFormField('fat', FormFieldType.FLOAT),
  CreateFormField('carbohydrate', FormFieldType.FLOAT),
  CreateFormField('dietaryFiber', FormFieldType.FLOAT),
  CreateFormField('salt', FormFieldType.FLOAT),
  CreateFormField('carbon', FormFieldType.FLOAT),
]);