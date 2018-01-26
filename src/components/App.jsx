import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

export default class App extends Component {
  render() {
    const { videoSearch, selectedVideo, videos, onVideoSelect } = this.props
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          videos={videos}
          selectedVideo={onVideoSelect} />
      </div>
    );
  }
}
