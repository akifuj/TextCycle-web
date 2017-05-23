import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMailRequest } from '../actions/mail';
import { Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isLoading: false
    }
  }

  handleClick(post) {
    let data = { post: post, user: this.props.auth.user};
    this.setState({ errors: {}, isLoading: true });
    this.props.sendMailRequest(data).then(
      () => this.context.router.push('/'),
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    )
  }

  render () {
    const i = this.props.posts.posts.findIndex((post) => post._id === this.props.params.postId);
    const post = this.props.posts.posts[i];
    const subtitle = post.author + "  "+ post.publisher;
    return (
      <Card className="container">
        <CardTitle title={post.title} subtitle={subtitle} />
        <img src={post.image} alt={post.title}/>
        <CardText>
          <span><p>多少日焼けしていますが、読むぶんには全く問題がありません</p></span>
          <h2>¥1,000</h2>
        </CardText>
        <CardActions>
          <RaisedButton label="購入" primary onTouchTap={this.handleClick.bind(this, post)} disabled={this.state.isLoading}/>
        </CardActions>
        <p>出品者: aki(経済学部3年)</p>
      </Card>
    );
  }
}

Single.propTypes = {
  sendMailRequest: React.PropTypes.func.isRequired
}

Single.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { sendMailRequest })(Single);
