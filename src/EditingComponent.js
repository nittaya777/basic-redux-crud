import React, { Component } from "react";
import {connect} from "react-redux"

class EditingComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
          newTitle,
          newMessage,
        };
        //ทำการ dispatch action
        this.props.dispatch({
          type: "UPDATE",
          data,
          id: this.props.id
        });
        this.getTitle.value = "";
        this.getMessage.value = "";
      };
  render() {
    return (
      <div className="edit-container">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            type="text"
            ref={(input) => (this.getTitle = input)}
            defaultValue={this.props.title}
            placeholder="Enter post title"
            required
          />
          <br />
          <br />
          <textarea
            cols="50"
            ref={(input) => (this.getMessage = input)}
            defaultValue={this.props.message}
            rows="5"
            placeholder="Enter post"
            required
          />
          <br />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditingComponent);