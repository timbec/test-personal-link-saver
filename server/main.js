import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";

import "../imports/api/users.js";
import { Links } from "../imports/api/links.js";
import "../imports/startup/simple-schema-configuration.js";
import shortid from "shortid";

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    console.log("this is a redirect from the middleware");
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader("Location", link.url);
      res.end();
    } else {
      next();
    }
  });
});
