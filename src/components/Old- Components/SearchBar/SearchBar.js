import React from "react";
import "../css/SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term) {
    this.props.onSearch = term;
  }
  handleTermChange(event) {
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
