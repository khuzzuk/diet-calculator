import {AppBar, CircularProgress, Toolbar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import Consumption from "../model/diet/Consumption";
import Meal from "../model/diet/Meal";
import Portion from "../model/diet/Portion";
import Product from "../model/diet/Product";
import {State} from "../state/State";
import MenuComponent from "./MenuComponent";

const styles = theme => ({
  languageIcon: {
    marginLeft: 'auto', display: 'flex',
  }, realmSelect: {
    width: 200,
  }
});

class TopMenu extends Component {

  showTable = entityName => () => {
    State.update({showTable: entityName})
  };

  render() {
    const {classes, t} = this.props;

    return <AppBar position={"relative"}>
      <Toolbar>
        <MenuComponent name={'data'}
                       entities={[Product.entityName, Portion.entityName, Meal.entityName]}/>
        <Button onClick={() => State.showConsumption(new Consumption())}>{t('consumption')}</Button>
        <div className={classes.languageIcon}>
          {State.data.fetching.size > 0 && <IconButton><CircularProgress
              color={"secondary"}/></IconButton>}
        </div>
      </Toolbar>
    </AppBar>;
  }
}

export default withStyles(styles)(withTranslation()(TopMenu));
