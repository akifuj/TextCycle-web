import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import NavigationBar from './NavigationBar'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    if (this.props.posts.error) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.posts.isLoading) {
      return <p>loading...</p>;
    }
    return (
      <div>
        <NavigationBar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return  {
    posts: state.posts,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
