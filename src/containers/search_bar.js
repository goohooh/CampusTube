import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		// console.log("Search 'twice' when FIRST RENDERING")
		// this.props.searchVideo('twice');
	}

	componentDidMount () {
		this.props.searchVideo('twice');
	}

	handleInputChange(event) {
		this.setState({
			// term: term
			term: event.target.value
		});
		// this.props.onSearchTermChange(term);
	}

	handleFormSubmit(event){
		event.preventDefault();

		this.props.searchVideo(this.state.term);

		// 차후 삭제 테스트
		this.setState({ term: '' })
	}
	
	render() {
		return (
			<div className="container">
				<form onSubmit={event => this.handleFormSubmit(event)}>
					<input
						// value 없으면 입력이 되는지 안되는지 차후 테스트
						value={this.state.term}
						onChange={this.handleInputChange}
						placeholder="Input Search Term" />
					<button className="btn" type="submit">Search</button>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);