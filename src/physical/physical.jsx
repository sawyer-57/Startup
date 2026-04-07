import React, { useState, useEffect, useRef} from 'react'; 
import './physical.css';

export function Physical() {
    const [messages, setMessages] = useState([]); 
    const [input, setInput] = useState(''); 
    const socketRef = useRef(null);

    useEffect(() => {
        async function loadMessages() {
            const response = await fetch('/api/messages/physical', {
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
            console.log('WebSocket connected (Physical)');
        });

        socketRef.current.addEventListener('message', (event) => {
            const msg = JSON.parse(event.data);

            // Only handle physical messages
            if (msg.type === 'physical') {
                setMessages((prevMessages) => [...prevMessages, msg]);
            }
        });

        return () => {
            socketRef.current.close();
        };
    }, []);


    async function handleSend(e) {
        e.preventDefault();

        const userName = localStorage.getItem('userName') || 'You';

        const newMessage = {
            type: 'physical',
            from: userName,
            text: input,
        };

        socketRef.current.send(JSON.stringify(newMessage));

        
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');
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
            <h2> Physical Skills Chat</h2>
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

            <form onSubmit={handleSend}>
                <input type="text" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Send</button>
            </form>

        </section>
      
    </div>
  );
}