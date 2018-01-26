import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import App from './components/App';

const API_KEY = 'AIzaSyCfKadtDHqAq6nHkoodEqwancOqNqPEhzM';

class AppContainer extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.updateSearchTerm('big shaq')
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
      <App
        selectedVideo={this.state.selectedVideo}
        videos={this.state.videos}
        onVideoSelect={this.onVideoSelect}
        videoSearch={videoSearch}
      />
    );
  }
}

ReactDOM.render(<AppContainer />, document.querySelector('.container'));
