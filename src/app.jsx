import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCfKadtDHqAq6nHkoodEqwancOqNqPEhzM';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.updateSearchTerm('waka flocka')
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
    });
  };

  updateSearchTerm = (searchTerm) => {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.updateSearchTerm(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          selectedVideo={this.onVideoSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
