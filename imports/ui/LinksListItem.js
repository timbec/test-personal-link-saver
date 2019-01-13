import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

// Create a boolean state called justCopied. Default to false.
//on success switch justCopied to true.
//wait a second. Switch justCopied to false.

//Dynamically render the button text. true => Copied, false => Copy.

class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard
      .on("success", () => {
        this.setState({ justCopied: true });
        setTimeout(() => {
          this.setState({ justCopied: false });
        }, 1500);
      })
      .on("error", () => {
        alert("unable to copy. Please manually copy the link");
      });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? "Copied" : "Copy"}
        </button>
        <button
          onClick={() => {
            Meteor.call(
              "links.setVisibility",
              this.props._id,
              !this.props.visible
            );
          }}
        >
          {this.props.visible ? "Hide" : "UnHide"}
        </button>
      </div>
    );
  }
}

//remember the old proptypes is deprecated.
LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  shortUrl: PropTypes.string.isRequired
};

export default LinksListItem;
