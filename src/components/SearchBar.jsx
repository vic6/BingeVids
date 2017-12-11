import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
    this.props.onSearchTermChange(this.state.searchTerm)
    console.log(this.state.searchTerm)
  };

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default SearchBar;
