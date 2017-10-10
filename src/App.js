import React, { Component } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchInput />
      </div>
    );
  }
}

export default App;
