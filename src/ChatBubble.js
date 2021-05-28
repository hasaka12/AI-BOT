import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const ChatBubble = props => {
  const { messages } = props;

  const getConversations = messagess => {
    if (!messagess) {
      return false;
    }

    const listItems = messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';

      if (message.type === 0) {
        bubbleClass = 'you';
        bubbleDirection = 'bubble-direction-reverse';
      }
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className={`bubble-container ${bubbleDirection}`} key={index}>
          <img className="img-circle" src={message.image} alt="bot" />
          <div className={`bubble ${bubbleClass}`}>{message.text}</div>
        </div>
      );
    });

    return listItems;
  };

  return (
    <div className="chats">
      <div className="chat-list">{getConversations(messages)}</div>
    </div>
  );
};

ChatBubble.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatBubble;
