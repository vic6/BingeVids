import React, {Component} from "react";
import VideoListItem from "./VideoListItem";

export default class VideoList extends Component {
  render() {
    const videoItems = this.props.videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
      selectedVideo={this.props.selectedVideo}
    />
  ));

  return (
    <ul className="col-md-4 list-group">{videoItems}</ul>
  )
}


};
