import React from 'react';
import './intellectual.css';

export function Intellectual() {
  return (
    <div className='chat-page'> 
        <aside className='users-sidebar'>
            <h3>Users</h3>
            <ul>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </ul>
        </aside>
        <section className='chat-section'> 
            <h2> Intellectual Skills Chat</h2>
            <div id="messages">
                <div className="message-other"><strong>User1:</strong> Hi! Can anyone help me with this math puzzle? </div>
                <div className="message-you"><strong>You:</strong> I can! What is it? </div>
            </div> 
            <form>
                <input type="text" placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>

        </section>
      
    </div>
  );
}