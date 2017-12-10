import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyCfKadtDHqAq6nHkoodEqwancOqNqPEhzM";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    YTSearch({ key: API_KEY, term: "ice cream" }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          selectedVideo={this.onVideoSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
