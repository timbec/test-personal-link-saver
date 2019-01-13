import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";

export const Links = new Mongo.Collection("links");

if (Meteor.isServer) {
  Meteor.publish("links", function() {
    return Links.find({ userId: this.userId });
  });
}

Meteor.methods({
  "links.insert"(url) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    new SimpleSchema({
      url: {
        type: String,
        label: "Your link",
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Links.insert({
      id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true
    });
  },
  "links.setVisibility"(_id, visible) {
    //check if user is logged in, throw an error if not logged in.
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    // simpleSchema _id is a string with a length more than 1
    // visible is a boolean
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({ _id, visible });
    //Links.update
    Links.update({ _id, userId: this.userId }, { $set: { visible } });
  }
});
// See above for reference
