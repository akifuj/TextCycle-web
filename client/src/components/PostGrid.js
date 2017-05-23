import React, { Component } from 'react';
import { Link } from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList';

class PostGrid extends Component {
  render () {
    var tiles = [];
    this.props.posts.posts.map((post, i) => {
      if ((post.title.indexOf(this.props.filterText) === -1 && post.author.indexOf(this.props.filterText) === -1) || (this.props.inCategoryOnly > 0 && post.category !== this.props.inCategoryOnly)) {
        return;
      }
      tiles.push(
        <Link to={`/view/${post._id}`} key={i}>
          <GridTile
            key={i}
            title={post.title}
            subtitle={<span>¥ <b>1000</b></span>}
          >
          <img src={post.image} alt={post.title}/>
          </GridTile>
        < /Link>);
    })
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        overflowX: 'auto',
        width: '545px',
      },
    };
    return (
      <div style={styles.root}>
        <GridList
          style={styles.gridList}
          cols={4}
          padding={15}
        >
          {tiles}
        </GridList>
      </div>
    );
  }
}

export default PostGrid;
