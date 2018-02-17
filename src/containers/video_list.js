import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import { selectVideo, searchVideo } from '../actions/index';


class VideoList extends Component {
	constructor(props) {
		super(props);

		this.handleSelectVideo = this.handleSelectVideo.bind(this);


		console.log('In VideoList constructor, selected_video: ', this.props.selected_video);
	}

	handleSelectVideo (event, video){
		event.preventDefault();
		console.log('In handleSelectVideo', video)
		this.props.selectVideo(video);
	}

	renderVideos() {
		console.log('In renderVideos!!', this.props.videos.all)
		return this.props.videos.map((video) => {
			const key = video.etag;
			const imageURL = video.snippet.thumbnails.default.url;
			const title = video.snippet.title;
			return (
				<li className="video-item"
					key={key}
					onClick={(event) => this.handleSelectVideo(event, video)}>
					<img src={imageURL} />
					<h5>{title}</h5>
				</li>
			);
		});
	}

	render() {
		return(
			<ul className="video-list">
				{this.renderVideos()}
			</ul>
		);
	}
} 

function mapStateToProps(state) {
	return { 
		videos: state.videos.all,
		selected_video: state.videos.selected_video
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectVideo, searchVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);