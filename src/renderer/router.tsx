import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './pages/root';
import Resume from './pages/resume';
import Routes from './common/constants/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加 exact */}
        <Route path={Routes.root} exact>
          <Root />
        </Route>
        <Route path={Routes.resume} exact>
          <Resume />
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to={Routes.root} />
    </HashRouter>
  );
}
export default Router;
