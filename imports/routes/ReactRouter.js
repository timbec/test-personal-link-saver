import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Signup from "../ui/Signup";
import NotFound from "../ui/NotFound";
import Login from "../ui/Login";
import Lnk from "../ui/Link";

window.browserHistory = browserHistory;

const unathenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/links"];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.push("/links");
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.push("/");
  }
};

export const onAuthChange = isAuthenticated => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unathenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  //if on unauthenticated page and user logged in, redirect to /links.
  if (isUnauthenticatedPage && isAuthenticated) {
    console.log("logged in");
    browserHistory.replace("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    console.log("not logged in");
    browserHistory.replace("/");
  }
};

export const ReactRouter = (
  <Router history={browserHistory}>
    <Route
      path="/"
      component={Login}
      exact={true}
      onEnter={onEnterPublicPage}
    />
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/links" component={Lnk} onEnter={onEnterPrivatePage} />
    <Route path="*" component={NotFound} />
  </Router>
);
