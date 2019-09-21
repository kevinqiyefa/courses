import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notfound from './components/NotFoundPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
