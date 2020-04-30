import {FormLabel} from "@material-ui/core";
import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import Select from "react-select";
import makeAnimated from 'react-select/animated'
import {State} from "../../state/State";

class EntitySelect extends Component {
    render() {
        const {
            t,
            name,
            label = t(name),
            suggestions = name,
            data = State.data[suggestions],
            value = State.data.entity[name],
            multi = false,
            onChange = this.updateEntity,
            ...other
        } = this.props;

        return <div {...other}>
            <FormLabel>{label}</FormLabel>
            <Select textFieldProps={{label: label, InputLabelProps: {shrink: false}}}
                    options={data}
                    components={makeAnimated()}
                    getOptionLabel={option => {
                        return <div>{option.name}</div>
                    }}
                    getOptionValue={option => {
                        return option.id
                    }}
                    filterOption={(option, input) => option.data.name.startsWith(input)}
                    onChange={onChange}
                    value={value || null}
                    isMulti={multi}/>
        </div>;
    }

    updateEntity = newValue => {
        State.updateEntity({[this.props.name]: newValue})
    };
}

export default withTranslation()(EntitySelect);