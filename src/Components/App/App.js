import React from 'react'
import { SearchResults } from '../SearchResults/SearchResults';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name:test, artist:testy, album:testament, id:01}]
    }
  }
  render() {
    return (
    <div>
      <h1>Spot<span className="highlight">Bud</span>dy</h1>
      <div className="App">
        {/* Add a SearchBar component */}
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          {/* Add a Playlist component */}
        </div>
      </div>
    </div>
    );
  }
}
