import React, { Component } from 'react';
import '../App.css';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';


/*
  디테일 구현 실패

  다만 검색하고 바로 영상이 뜨는 UX가 좋지는 않을 듯
  모바일 유저라면 데이터가 날아갈 테고

  그래도, 구현을 못한 이유가 궁금하다.

  우선 리스트에서 아이템을 클릭하면 리스트가 다시 렌더링 된다(콘솔로 확인)
  selected_video에 변화를 줬는데, 리스트가 왜 리렌더링 되는 것일
 */


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
