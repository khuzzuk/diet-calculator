import {TextField} from "@material-ui/core";
import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {State} from "../../state/State";

class FloatField extends Component {
  updateFloat = onChange => event => {
    let number = parseFloat(event.target.value);
    if (number || number === 0) {
      onChange(number)
    }
  };

  render() {
    const {t, name, onChange = num => State.updateEntity({[name]: num}), ...other} = this.props;
    return <TextField label={t(name)} type='number'
                      onChange={this.updateFloat(onChange)} {...other}/>;
  }
}

export default withTranslation()(FloatField);