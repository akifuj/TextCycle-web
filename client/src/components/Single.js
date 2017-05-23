import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMailRequest } from '../actions/mail';
import { Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isLoading: false,
      open: false,
      message: {
        title: "ご購入ありがとうございます",
        text: "購入の確認メールを送りましたのでご確認下さい。"
      }
    }
  }

  handleClick(post) {
    let data = { post: post, user: this.props.auth.user};
    this.setState({ errors: {}, isLoading: true });
    this.props.sendMailRequest(data).then(
      () => this.setState({ open: true}),
      (err) => this.setState({ errors: err.response.data, isLoading: false, open: true, message: { title: "エラーが発生しました", text: "再度お試し下さい。" } })
    )
  }

  handleClose = () => {
    this.setState({open: false});
    this.context.router.push('/');
  };

  render () {
    const i = this.props.posts.posts.findIndex((post) => post._id === this.props.params.postId);
    const post = this.props.posts.posts[i];
    const subtitle = post.author + "  "+ post.publisher;
    const actions = [
      <FlatButton
        label="Okay"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
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

        <Dialog
          title={this.state.message.title}
          actions={actions}
          modal={false}
          open={this.state.open}
        >{this.state.message.text}</Dialog>
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
