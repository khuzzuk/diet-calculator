import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import DataLoader from "./state/DataLoader";
import './i18n';

DataLoader.refreshData();

ReactDOM.render(
      <App/>,
    document.getElementById('root'));
