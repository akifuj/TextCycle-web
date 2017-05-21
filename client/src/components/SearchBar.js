import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInCategoryChange = this.handleInCategoryChange.bind(this);
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  handleInCategoryChange(event, index, value) {
    this.props.onInCategoryInput(value);
  }

  render () {
    return (
      <div>
        <TextField
          type="text"
          value={this.props.filterText}
          floatingLabelText="Search..."
          onChange={this.handleFilterTextInputChange}
          style={{padding: ' 0 0 0 1.5rem', display: 'block'}}
        />
      <DropDownMenu value={this.props.inCategoryOnly}  onChange={this.handleInCategoryChange}>
          <MenuItem value={0} primaryText="全て" />
          <MenuItem value={1} primaryText="商学部" />
          <MenuItem value={2} primaryText="経済学部" />
          <MenuItem value={3} primaryText="法学部" />
          <MenuItem value={4} primaryText="社会学部" />
        </DropDownMenu>
      </div>
    );
  }
}

export default SearchBar
