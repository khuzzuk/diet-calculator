import {TextField} from "@material-ui/core";
import React from "react";
import {State} from "../state/State";
import EntitySelect from "./field/EntitySelect";
import EnumCombobox from "./field/EnumCombobox";
import EnumSelect from "./field/EnumSelect";
import IntegerField from "./field/IntegerField";
import FormFieldData from "./FormFieldData";
import {FormFieldType} from "./FormFieldType";

const basicStyle = {
    root: {
        display: 'flex',
    },
    field: {
        width: '100%',
    }
};

export const CreateFormField = (fieldData: FormFieldData, t) => {
    const {name, type, suggestions, toView, toModel} = fieldData;
    const entity = State.data.entity;
    let value = entity[name];
    value = toView ? toView(value) : value;
    const onUpdate = updateProperty(name, toModel);

    switch (type) {
        case FormFieldType.TEXT:
            return <TextField key={name} label={t(name)} value={value || ''} onChange={onUpdate} style={basicStyle.field}/>;

        case FormFieldType.TEXT_AREA:
            return <TextField key={name} label={t(name)} value={value || ''} onChange={onUpdate} multiline style={basicStyle.field}/>;

        case FormFieldType.INTEGER:
            return <IntegerField key={name} label={t(name)} value={value || ''} onChange={onUpdate} style={basicStyle.field}/>;

        case FormFieldType.FLOAT:
            return <TextField key={name} label={t(name)} value={value || ''} type={'number'} onChange={onUpdate} style={basicStyle.field}/>;

        case FormFieldType.ENTITY_SELECT:
            return <EntitySelect key={name} name={name} suggestions={suggestions}/>;

        case FormFieldType.ENTITY_COMBOBOX:
            return <EntitySelect key={name} name={name} suggestions={suggestions} multi/>;

        case FormFieldType.ENUM_SELECT:
            return <EnumSelect key={name} name={name} suggestions={suggestions} value={value}/>;

        case FormFieldType.ENUM_COMBOBOX:
            return <EnumCombobox key={name} name={name} suggestions={suggestions} toView={toView}/>;

    }
    throw fieldData;
};

const updateProperty = (propName: string, toModel: func) => event => {
    const newValue = event.target ? event.target.value : event;
    const value = toModel ? toModel(newValue) : newValue;
    const entity = State.data.entity;
    entity.updateWith({[propName]: value});
    State.update({entity: entity});
};
