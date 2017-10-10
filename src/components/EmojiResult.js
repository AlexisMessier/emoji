import React from 'react';
import EmojiResultRow from './EmojiResultRow';

class EmojiResult extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.emojiData.map((emojiData) => {
            return (
              <EmojiResultRow
                key={emojiData.symbol}
                symbol={emojiData.symbol}
                title={emojiData.title}
              />
            );
          })
        }
      </div>
    );
  }
}

export default EmojiResult;
