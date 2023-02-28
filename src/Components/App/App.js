import React from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name:"test", artist:"testy", album:"testament", id:01}],
      playlistName: "hardcoded",
      playlistTracks: [{name:"test02", artist:"testy02", album:"testamore", id:02}]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let newTrackArr = this.state.playlistTracks;

    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } else {
      newTrackArr.push(track);
    }
    this.setState({
      playlistTracks: newTrackArr
    })
  }

  render() {
    return (
    <div>
      <h1>Spot<span className="highlight">Bud</span>dy</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    );
  }
}
