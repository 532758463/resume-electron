import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
// import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    // <>
    //   <div>可视化简历平台22</div>
    //   <div>这是 Electron + React </div>
    // </>
    <Router />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
