import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleSearchTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
        />

        <p>{this.state.searchTerm}</p>
      </div>
    );
  }
}

export default SearchBar;
