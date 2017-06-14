import React, { Component } from 'react';

export default class VideoList extends Component {
    render() {
        if (!this.props.videos || this.props.videos.length <= 0) {
            return <div>Loading...</div>;
        }

        return (
            <ul ref="videoList" className="col-md-4 list-group">
                {this.props.videos.length}
            </ul>
        );
    }
}
