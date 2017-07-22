import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Landing from './components/Landing';
import DogDetails from './components/DogDetails';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Switch>
              <Route path="/dog/:breedName" component={DogDetails}/>
              <Route path="/" component={Landing}/>
          </Switch>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
