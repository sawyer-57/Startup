import React, { useState, useEffect} from 'react'; 
import './physical.css';

export function Physical() {
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem('physicalMessages');
        return savedMessages ? JSON.parse(savedMessages) : [];
    });

    const [input, setInput] = useState(''); 

    function handleSend(e) {
        e.preventDefault();

        const userName = localStorage.getItem('username') || 'You'; 

        const newMessage = {
            from: userName, 
            text: input 
        }; 

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages); 
        localStorage.setItem('physicalMessages', JSON.stringify(updatedMessages));
        setInput('');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const fakeUsers = ['User1', 'User2', 'User3'];
            const fakeTexts = [
                "I'm working on that too!",
                "I just hit a new stunt!", 
                "I just landed my back tuck!", 
                "Does anyone have any good workout tips?", 
                "How long did it take you to learn that?", 
                "Can someone watch my video and give me feedback?"
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
            <h2> Physical Skills Chat</h2>
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

            <form onSubmit={handleSend}>
                <input type="text" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Send</button>
            </form>

        </section>
      
    </div>
  );
}