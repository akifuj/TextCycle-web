import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/auth';
import requireAuth from './utils/requireAuth';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import FilterablePostGrid from './components/FilterablePostGrid';
import Single from './components/Single';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

injectTapEventPlugin();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

const Style = {
    palette:
    {
      primary1Color: "#00E676",
    },
};

const router = (
  <MuiThemeProvider muiTheme={getMuiTheme(Style)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={FilterablePostGrid}></IndexRoute>
          <Route path="/view/:postId" component={requireAuth(Single)}></Route>
        </Route>
        <Route path="/signup" component={SignUpForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(router, document.getElementById('root'));
