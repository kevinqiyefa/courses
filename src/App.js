import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Notfound from './components/NotFoundPage';
import { configureStore } from './store';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import Course from './containers/Course';
import Students from './containers/Students';

import './App.css';

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
            <Route exact path="/:courseID/students" component={Students} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
