import React, { Component } from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
    render() {
        if (!this.props.videos || this.props.videos.length <= 0) {
            return <div>Loading...</div>;
        }

        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem 
                key={video.etag} 
                video={video}
                onVideoSelect={this.props.onVideoSelect} />; 
        });

        return (
            <ul ref="videoList" className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }
}
