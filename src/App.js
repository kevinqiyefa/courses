import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Notfound from './components/NotFoundPage';
import { configureStore } from './store';
import Homepage from './containers/Homepage';
import './App.css';
import Header from './components/Header';
import Course from './containers/Course';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:courseID" component={Course} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
