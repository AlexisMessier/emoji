import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import EmojiResult from './components/EmojiResult';
import filterEmoji from './filterEmoji';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 50),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 50),
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResult emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

export default App;
