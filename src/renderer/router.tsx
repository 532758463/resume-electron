import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './pages/root';
// import Resume from './container/resume';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加 exact */}
        <Route path="/" exact>
          <Root />
        </Route>
        <Route path="/resume" exact>
          {/* <Resume /> */}
          <div>1</div>
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to="/" />
    </HashRouter>
  );
}
export default Router;
