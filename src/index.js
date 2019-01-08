import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

// css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './lib/comunyCss';

// app component
import App from './routes';

import store from './store';

// Create a history of your choosing (we're using a hash history in this case)
const history = createHashHistory({ queryKey: false });

ReactDOM.render(
  <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
  </Provider>, document.getElementById('root'));
