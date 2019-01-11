import React from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Links } from "../api/links";
import LinksListItem from "./LinksListItem";

class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    console.log("component did mount LinksList");
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe("links");
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    console.log("component will unmount LinksList");
    this.linksTracker.stop();
  }
  renderLinkListItems() {
    return this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
  }
  render() {
    return (
      <div>
        <h1>Links List</h1>
        <div>{this.renderLinkListItems()}</div>
      </div>
    );
  }
}

export default LinksList;
