import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    //ทำการ dispatch action
    this.props.dispatch({
      type: "ADD_POST",
      data,
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  render() {
    return (
      <div className="container">
        <h1 className="heading">Create POST</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter post title"
            required
          />
          <br />
          <br />
          <textarea
            cols="50"
            ref={(input) => (this.getMessage = input)}
            rows="5"
            placeholder="Enter post"
            required
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
//ใช้ connect เพื่อเชื่อมต่อ component เข้ากับ store
//ทำให้เราสามารถใช้งาน dispatch action ได้
//เข้าถึง dispatch แบบ Props ได้
//1.connect()(PostForm)
//2.this.props.dispatch({});
//3.ทำการ mapStateToProps
export default connect()(PostForm);
