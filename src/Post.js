import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.message}</p>
        <br />
        <br />
        <button className="btn-edit"
          onClick={() => {
            this.props.dispatch({ type: "EDIT_POST", id: this.props.id });
          }}
        >
          Edit
        </button>
        <button className="btn-delete"
          onClick={() =>
            this.props.dispatch({ type: "DELETE_POST", id: this.props.id })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(Post);
