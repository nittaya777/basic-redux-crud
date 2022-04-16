import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditingComponent from "./EditingComponent";

class AllPost extends Component {
  render() {
    return (
      <div>
        <h1>All Rows</h1>
        {this.props.posts.map((post,index) => {
            return (
                <div className="container mb-2" key={post.id}>
                    {post.editing ? <EditingComponent key={post.id} {...post}/> :<Post key={post.id} {...post} />}
                </div>
            )
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
