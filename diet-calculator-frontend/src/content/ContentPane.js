import React, {Component} from "react";
import EntityEditor from "../form/EntityEditor";
import {State} from "../state/State";
import Table from "./Table";

class ContentPane extends Component {
  render() {
    const {showTable, showForm, showScenario, entity} = State.data;
    let content                                       = <div/>;

    if (showTable) {
      content = <Table/>
    } else if (showForm) {
      content = <EntityEditor entity={entity} entityName={showForm}/>
    }

    return content;
  }

}

export default ContentPane;