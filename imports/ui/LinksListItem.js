import { Meteor } from "meteor/meteor";
import React from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

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
      <div className="item">
        <p className="item__main-url">{this.props.url}</p>
        <p className="item__message">{this.props.shortUrl}</p>

        <a
          className="button button--pill button--link"
          href={this.props.shortUrl}
          target="_blank"
        >
          Visit
        </a>
        <button
          className="button button--pill"
          ref="copy"
          data-clipboard-text={this.props.shortUrl}
        >
          {this.state.justCopied ? "Copied" : "Copy"}
        </button>
        <button
          className="button button--pill"
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
