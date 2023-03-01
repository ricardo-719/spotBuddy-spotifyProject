import React from 'react'
import './SearchBar.css'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term)
        /* this.props.onSearch(query); */
    }

    handleTermChange(e) {
        const value = e.target.value;
        this.setState({term: value});
        /* this.search(query); */
    }

    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}