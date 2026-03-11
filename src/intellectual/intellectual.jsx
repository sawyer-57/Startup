import React, { useState, useEffect } from 'react'; 
import './intellectual.css';

export function Intellectual() {
    const [messages, setMessages] = useState([]); 

    const [newMessage, setNewMessage] = useState(''); 

    useEffect(() => {
        async function loadMessages() {
            const response = await fetch('/api/messages', {
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            }
        }
        loadMessages();
    }, []);

    async function sendMessage(event) {
        event.preventDefault();

        const userName = localStorage.getItem('userName') || 'You';

        const message = {
            from: userName,
            text: newMessage,
        };

        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(message),
        });

        if (response.ok) {
            setMessages([...messages, message]);
            setNewMessage('');
        } 
    }

    useEffect(() => {
        localStorage.setItem('intellectualMessages', JSON.stringify(messages));
    }, [messages]); 

    useEffect(() => {
        const interval = setInterval(() => {
            const fakeUsers = ['User1', 'User2', 'User3'];
            const fakeTexts = [
                "I'm working on that too!", 
                "Oh yeah, that is a hard one!", 
                "Does anyone understand this other problem I'm doing?", 
                "I think I figured it out!", 
                "I love doing those!", 
                "I can help!", 
                "Can someone help me with this?"
            ]; 

            const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
            const randomText = fakeTexts[Math.floor(Math.random() * fakeTexts.length)];

            const fakeMessage = {
                from: randomUser,
                text: randomText,
            };

            setMessages((prevMessages) => [...prevMessages, fakeMessage]);
        }, 8000); 

        return () => clearInterval(interval);
    }, []); 

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
                {messages.map((msg, index) => {
                    const userName = localStorage.getItem('username') || 'You';

                    return(
                        <div key={index} className={msg.from === userName ? 'message-you' : 'message-other'}>
                            <strong>{msg.from}:</strong> {msg.text}
                        </div> 
                    ); 
                })} 
            </div> 

            <form onSubmit={sendMessage}>
                <input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>

        </section>
      
    </div>
  );
}