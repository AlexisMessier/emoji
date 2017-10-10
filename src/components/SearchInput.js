import React, { Component } from 'react';

const styleComponentSearch = {
  borderRadius: "5px",
  borderBottom: "1px solid blue",
  margin: "auto",
  width: "70%"
}

const styleComponentInput = {
  borderRadius: "5px",
  border: "5px solid blue",
  boxSizing: "border-box",
  fontSize: "18px",
  color: "blue",
  padding: "10px",
  width: "100%"
}

class SearchInput extends React.Component {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div style={styleComponentSearch}>
        <div>
          <input
            style={styleComponentInput}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
