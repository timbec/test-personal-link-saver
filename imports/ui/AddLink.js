import React from "react";
import { Meteor } from "meteor/meteor";

class Addlink extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();
    if (url) {
      Meteor.call("links.insert", url);
      this.refs.url.value = "";
    }
  }
  // Have to figure out why its not authenticating for a real URL like on the lesson. What part did I miss?
  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}

export default Addlink;
