import React from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name:"test", artist:"testy", album:"testament", id:"01"}],
      playlistName: "hardcoded",
      playlistTracks: [{name:"test02", artist:"testy02", album:"testamore", id:"02"}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
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

  removeTrack(track) {
    const newList = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({
      playlistTracks: newList
    })
  }

  updatePlaylistName(newName) {
    this.setState(
      {playlistName: newName}
    );
  }

  render() {
    return (
    <div>
      <h1>Spot<span className="highlight">Bud</span>dy</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
          onRemove={this.removeTrack} isRemoval={true} onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    );
  }
}
