import React from 'react';

const VideoListItem = ({ video, selectedVideo }) => {

  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li  className="list-group-item">
      <div onClick={() => selectedVideo(video)} role="menuitem" tabIndex={0} className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} alt="thumbnail" />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
