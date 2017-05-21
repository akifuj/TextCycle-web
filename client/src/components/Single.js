import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Single extends Component {
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
          <RaisedButton label="購入" primary/>
        </CardActions>
        <p>出品者: aki(経済学部3年)</p>
      </Card>
    );
  }
}

export default Single;
