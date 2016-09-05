import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import { selectVideo, searchVideo } from '../actions/index';


class VideoList extends Component {
	constructor(props) {
		// redux로 연결됬을 때 consturctor와 super가 필요한가?? 차후 테스
		super(props);

		this.handleSelectVideo = this.handleSelectVideo.bind(this);


		console.log('In VideoList constructor, selected_video: ', this.props.selected_video);
	}

	handleSelectVideo (event, video){
		event.preventDefault();
		console.log('In handleSelectVideo', video)
		this.props.selectVideo(video);
	}

	// componentWillMount 는 에러가 생김, 컴포넌트 렌더링간에 엇박??
	// ccomponentWillUpdate () {
	// 	this.props.selectVideo(this.props.videos[0]);
	// }

	renderVideos() {
		console.log('In renderVideos!!', this.props.videos.all)
		return this.props.videos.all.map((video) => {
			const key = video.etag;
			const imageURL = video.snippet.thumbnails.default.url;
			const title = video.snippet.title;
			return (
				<li key={key}
					onClick={(event) => this.handleSelectVideo(event, video)}>
					<img src={imageURL} />
					<h5>{title}</h5>
				</li>
			);
		});
	}

	render() {
		return(
			<ul>
				{this.renderVideos()}
			</ul>
		);
	}
} 

function mapStateToProps(state) {
	return { 
		videos: state.videos,
		selected_video: state.videos.selected_video
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectVideo, searchVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);