// import React, { Component } from "react";
// import Prototypes from "prop-types";
// import {connect} from "react-redux";
// import {fetchPosts} from '../../actions/chartAction';

// class Posts extends Component {

//   componentWillMount(){
//     this.props.fetchPosts();
//   }

//   render() {
//     const postItems = this.props.posts.map(post => (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));
//     return (
//       <div>
//         <h4>posts</h4>
//         {postItems}
//       </div>
//     );
//   }
// }

// Posts.propTypes = {
//   fetchPosts: Prototypes.func.isRequied,
//   posts:Prototypes.array.isRequired,
// }

// const mapStateToProps = state => ({
//   posts: state.charts.items,
// });

// export default connect(mapStateToProps,{fetchPosts})(Posts);
