import React from "react";
import { Meteor } from "meteor/meteor";

class Addlink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();
    //const url = this.state.url;
    const { url } = this.state; //identical
    if (url) {
      Meteor.call("links.insert", url, (err, res) => {
        if (!err) {
          this.setState({ url: "" });
        }
      });
    }
  }
  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    });
  }

  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange.bind(this)}
          />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}

export default Addlink;
