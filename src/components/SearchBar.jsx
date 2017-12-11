import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
    this.props.onSearchTermChange(event.target.value)
  };

  render() {

    return (
      <div className="search-bar">
        <input
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
          placeholder='Search'
        />
      </div>
    );
  }
}

export default SearchBar;
