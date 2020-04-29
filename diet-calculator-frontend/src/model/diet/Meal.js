import {FormFieldType} from "../../form/FormFieldType";
import Entity, {CreateColumn, CreateFormField, RegisterEntity} from "../Entity";

export default class Meal extends Entity {
  static entityName: string = 'meal';

  name: string;
}

RegisterEntity(Meal,
               [CreateColumn('name', FormFieldType.TEXT),],
               [CreateFormField('name', FormFieldType.TEXT),]);