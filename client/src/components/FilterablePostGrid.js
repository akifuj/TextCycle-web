import React, { Component } from 'react';
import PostGrid from './PostGrid';
import SearchBar from './SearchBar';

class FilterablePostGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inCategoryOnly: 0
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInCategpryInput = this.handleInCategpryInput.bind(this);
  }
  handleFilterTextInput(filterText) {
    this.setState({ filterText: filterText});
  }
  handleInCategpryInput(inCategoryOnly) {
    this.setState({ inCategoryOnly: inCategoryOnly})
  }
  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inCategoryOnly={this.state.inCategoryOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInCategoryInput={this.handleInCategpryInput}
        />
        <PostGrid
          className='container' filterText={this.state.filterText}
          inCategoryOnly={this.state.inCategoryOnly}
        />
      </div>
    )
  }
}

export default FilterablePostGrid;
