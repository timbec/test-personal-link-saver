import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Lnk from '../ui/Link';

console.log(NavLink);

export const history = createHistory();

export const AppRouter = () => (
 <Router history={history}>
    <Switch>
       <Route path="/" component={Login} exact={true} />
       <Route path="/signup" component={Signup} />
       <Route path="/links" component={Lnk} />
       <Route path="*" component={NotFound} />
    </Switch>
 </Router>
);
