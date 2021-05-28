import React from 'react';
import './App.css';

function App() {
  return (
    <div class="grid-container">
      <div class="item1">
        <img src="./bot-1.png" alt="bot" class="img-container" />
      </div>
      <div class="item2">
        <div className="chats">
          <div className="chat-list" id="chatList">
          </div>
        </div>
      </div>
      <div class="item3">
        <img src="./bot-1.png" alt="bot" class="img-container" />
      </div> 
    </div>
  );
}

export default App;
