import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import EmojiResult from './components/EmojiResult';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleChange}
        />
        <EmojiResult
          emojiData={this.state.filteredEmoji}
        />
      </div>
    );
  }
}

export default App;
