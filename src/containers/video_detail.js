import React, { Component } from 'react';
import { connect } from 'react-redux';


class VideoDetail extends Component {
	constructor(props){
		super(props);
		console.log('video detail constructor: ',this.props.video)

		this.state = {
			video : this.props.video
		}
	}
	renderVideo() {
		if (!this.props.video){
		console.log('In video detail render')
			return (<h2>Loading...</h2>);
		}
		const video = this.props.video;
		console.log('in renderVideo: ', video)
		const videoId = video.id.videoId;
		const title = video.snippet.title;
		const description = video.snippet.description;
		const url = `https://www.youtube.com/embed/${videoId}`;
		return (<div>
				<iframe 
					allowFullScreen
					frameBorder="0"
					width="500"
					height="380"
					src={url}>
				</iframe>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		);
	}

	render() {
		return (
			<article>
				{this.renderVideo()}
			</article>
		);
	}
}


function mapStateToProps(state) {
	return {
		video: state.videos.selected_video
	}
}

export default connect(mapStateToProps)(VideoDetail);