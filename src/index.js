import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCze8jrx_xGWne519WrZ7SGuHst0tR5GD0';


//cuando tenemos una clase que hereda de Component, tenemos la variable "state" y cada vez que 
//actualizemos esa variable, se actualiza el contenido.
class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos: []};
    
    this.videoSearch('AuronPlay');
  }

  videoSearch(term) {
    YTSearch({key : API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        
      });
    });

  }

  render (){
    return (
      <div>
        <SearchBar onTextChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          videos = {this.state.videos} 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        />
      </div>);
  }


}

ReactDOM.render(
  <App/>
  , document.querySelector('.container'));
