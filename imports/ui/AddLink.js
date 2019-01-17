import React from "react";
import Modal from "react-modal";
import { Meteor } from "meteor/meteor";

class Addlink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      isOpen: false,
      error: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();
    //const url = this.state.url;
    const { url } = this.state; //identical
    if (url) {
      Meteor.call("links.insert", url, (err, res) => {
        if (!err) {
          this.handleModalClose();
        } else {
          this.setState({ error: err.reason });
        }
      });
    }
  }
  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    });
  }
  handleModalClose() {
    console.log("this is being closed");
    this.setState({
      isOpen: false,
      url: "",
      error: ""
    });
  }
  //removes error for modal
  componentWillMount() {
    Modal.setAppElement("body");
  }

  render() {
    return (
      <div>
        <button
          className="button"
          onClick={() => this.setState({ isOpen: true })}
        >
          + Add Link
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
        >
          <p>Add Link</p>
          {this.state.error ? <p>{this.state.error}</p> : ""}
          <form
            className="boxed-view__form"
            onSubmit={this.onSubmit.bind(this)}
          >
            <input
              type="text"
              placeholder="URL"
              ref="url"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button
              className="button"
              onClick={() =>
                this.setState({
                  isOpen: true
                })
              }
            >
              Add Link
            </button>

            <button
              type="button"
              className="button button--secondary"
              onClick={() => this.handleModalClose()}
            >
              Cancel
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Addlink;
