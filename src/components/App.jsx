import React from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

const App = ({ videoSearch, selectedVideo, videos, onVideoSelect }) => (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} selectedVideo={onVideoSelect} />
    </div>
  );

export default App;
