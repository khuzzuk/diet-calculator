import React, {Component} from "react";
import ConsumptionComponent from "../form/consumption/ConsumptionComponent";
import EntityEditor from "../form/EntityEditor";
import {State} from "../state/State";
import Table from "./Table";

class ContentPane extends Component {
  render() {
    const {showTable, showForm, showConsumption, entity} = State.data;
    let content                                       = <div/>;

    if (showTable) {
      content = <Table/>
    } else if (showForm) {
      content = <EntityEditor entity={entity} entityName={showForm}/>
    } else if (showConsumption) {
      content = <ConsumptionComponent/>
    }

    return content;
  }

}

export default ContentPane;