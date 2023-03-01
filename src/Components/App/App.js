import React from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name:"test", artist:"testy", album:"testament", id: 1}],
      playlistName: "hardcoded",
      playlistTracks: [{name:"playlisttest02", artist:"playlisttesty02", album:"testamore", id: 2},
    {name:"playlisttest03", artist:"playlisttesty03", album:"playlisttestaevenmore", id: 3}]
    }
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let newTrackArr = this.state.playlistTracks;

    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    newTrackArr.push(track);
    this.setState({
      playlistTracks: newTrackArr
    })
  }

  removeTrack(track) {
    const newList = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({
      playlistTracks: newList
    })
  }

  updatePlaylistName(newName) {
    this.setState(
      {playlistName: newName}
    );
  }

savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(query) {
    console.log(query);
    //API fetch request?
  }

  render() {
    return (
    <div>
      <h1>Spot<span className="highlight">Bud</span>dy</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} 
            isRemoval={true} 
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    );
  }
}
