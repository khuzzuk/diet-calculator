import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {reportService} from "../../client/ReportService";
import Consumption from "../../model/diet/Consumption";
import Meal from "../../model/diet/Meal";
import Portion from "../../model/diet/Portion";
import Product from "../../model/diet/Product";
import {State} from "../../state/State";
import EntitySelect from "../field/EntitySelect";
import FloatField from "../field/FloatField";

class ConsumptionComponent extends Component {
  onEaten = () => {
    State.showConsumption(new Consumption());
    reportService.refreshReportForToday();
  };

  render() {
    const {t}              = this.props;
    const {entity, report} = State.data;

    return <Grid container spacing={10} alignItems={'center'} justify={'center'}
                 direction={"column"}>
      <Grid item>
        <Card style={{width: 300}}>
          <CardHeader title={t('todayReport')}/>
          {report && <CardContent>
            <Typography>{t('calories') + ': ' + report.calories}</Typography>
            <Typography>{t('proteins') + ': ' + report.proteins.toFixed(2) + 'g'}</Typography>
            <Typography>{t('fat') + ': ' + report.fat.toFixed(2) + 'g'}</Typography>
            <Typography>{t('carbohydrate') + ': ' + report.carbohydrate.toFixed(2) + 'g'}</Typography>
            <Typography>{t('dietaryFiber') + ': ' + report.dietaryFiber.toFixed(2) + 'g'}</Typography>
            <Typography>{t('salt') + ': ' + report.salt.toFixed(2) + 'g'}</Typography>
            <Typography>{t('carbon') + ': ' + report.carbon.toFixed(2) + 'g'}</Typography>
          </CardContent>}
        </Card>
      </Grid>
      <Grid item container spacing={3} alignItems={"center"} justify={"center"}>
        <Grid item>
          <FloatField name={'amount'} value={entity.amount || ''} type={'number'}/>
        </Grid>
        <Grid item>
          <EntitySelect name={Product.entityName} style={{width: 200}}/>
        </Grid>
        <Grid item>
          <EntitySelect name={Portion.entityName} style={{width: 200}}/>
        </Grid>
        <Grid item>
          <EntitySelect name={Meal.entityName} style={{width: 200}}/>
        </Grid>
        <Grid item>
          <Button
              onClick={() => State.services.consumption.save(entity, this.onEaten)}>Zjadłam</Button>
        </Grid>
      </Grid>
    </Grid>;
  }
}

export default withTranslation()(ConsumptionComponent);