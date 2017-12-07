import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleSearchTerm = () => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return <input />;
  }
}

export default SearchBar;
