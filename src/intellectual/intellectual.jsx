import React, { useState, useEffect, useRef } from 'react'; 
import './intellectual.css';

export function Intellectual() {
    const [messages, setMessages] = useState([]); 
    const [newMessage, setNewMessage] = useState(''); 
    const socketRef = useRef(null);

    useEffect(() => {
        async function loadMessages() {
            const response = await fetch('/api/messages/intellectual', {
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            }
        }
        loadMessages();
    }, []);

    useEffect(() => {
        socketRef.current = new WebSocket('ws://localhost:4000');

        socketRef.current.addEventListener('open', () => {
            console.log('WebSocket connected (Intellectual)');
        });

        socketRef.current.addEventListener('message', (event) => {
            const msg = JSON.parse(event.data);

            // Only handle intellectual messages
            if (msg.type === 'intellectual') {
                setMessages((prevMessages) => [...prevMessages, msg]);
            }
        });

        return () => {
            socketRef.current.close();
        };
    }, []);


    async function sendMessage(event) {
        event.preventDefault();

        const userName = localStorage.getItem('userName') || 'You';

        const message = {
            type: 'intellectual',
            text: newMessage,
            from: userName,
        };

        socketRef.current.send(JSON.stringify(message));



        
        setMessages((prevMessages) => [...prevMessages, message]);
        setNewMessage('');
    }



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
                    const userName = localStorage.getItem('userName') || 'You';

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