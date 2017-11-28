import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {AppLayout} from "./layouts/AppLayout";
import {getNavData, getRootNavData} from "./common/nav";


function RouterConfig({ history }) {

  var rootNavData=getRootNavData();
  var navData = getNavData();
  return (
    <Router history={history}>
      <AppLayout rootNavData={rootNavData} navData={navData} history={history}>
        <Switch>
          {
            rootNavData.map(value => <Route path={value.path} component={value.component} key={value.path} exact/>)
          }
          {
            navData.map(value=><Route path={value.path} component={value.component} key={value.path} exact/>)
          }
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default RouterConfig;
