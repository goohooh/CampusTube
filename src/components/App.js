import React, { Component } from 'react';
import '../App.css';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to CampusTube!!</h2>
          <SearchBar />
        </div>
        <section className="container">
        <VideoDetail />
        <VideoList />
        </section>
      </div>
    );
  }
}

export default App;
