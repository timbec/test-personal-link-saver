import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
// attempt to integrate react-router 4.0
// import { AppRouter, history } from "../imports/routes/AppRouter";

import {
  ReactRouter,
  history,
  onAuthChange
} from "../imports/routes/ReactRouter";
import "../imports/startup/simple-schema-configuration.js";

//import "./main.html";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(ReactRouter, document.getElementById("app"));
});
