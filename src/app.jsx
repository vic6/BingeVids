import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";

const API_KEY = "AIzaSyCfKadtDHqAq6nHkoodEqwancOqNqPEhzM";

class App extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    YTSearch({ key: API_KEY, term: "ice cream" }, data => {
      this.setState({videos: data})
    });
  }

  render() {
    console.log(this.state.videos)
    return (
      <div>
        hello dude
        <SearchBar />
        {API_KEY}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
