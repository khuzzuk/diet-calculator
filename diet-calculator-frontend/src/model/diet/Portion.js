import {FormFieldType} from "../../form/FormFieldType";
import Entity, {CreateColumn, CreateFormField, RegisterEntity} from "../Entity";

export default class Portion extends Entity {
  static entityName: string = 'portion';

  name: string;
  weight: number;
}

RegisterEntity(Portion,
               [CreateColumn('name', FormFieldType.TEXT),
                CreateColumn('weight', FormFieldType.FLOAT),],
               [CreateFormField('name', FormFieldType.TEXT),
                CreateFormField('weight', FormFieldType.FLOAT),]);