const { WebSocketServer, WebSocket } = require('ws');
const DB = require('./database.js'); // make sure you require your DB
const connectedUsers = new Set(); 


function broadcastUsers(socketServer) {
  const userList = Array.from(connectedUsers);

  socketServer.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) { // WebSocket.OPEN
      client.send(JSON.stringify({
        type: 'users',
        users: userList,
      }));
    }
  });
}

function peerProxy(httpServer) {
  // Create a websocket server using the existing HTTP server
  const socketServer = new WebSocketServer({ server: httpServer });

  socketServer.on('connection', (socket) => {
    console.log('A new WebSocket client connected');
    socket.isAlive = true;

    // Forward messages to everyone except the sender and save to DB
    socket.on('message', async (data) => {
      try {
        const message = JSON.parse(data); // Expect { type, content, user }

        if (message.type === 'join') {
            socket.user = message.user; 
            connectedUsers.add(message.user);

            broadcastUsers(socketServer);
            return;
        }

        const formattedMessage = {
            type: message.type,
            user: message.user || message.from, // Support both 'user' and legacy 'from'
            content: message.content || message.text, // Support both 'content' and legacy 'text'
            };


        // Save the message to the DB
        await DB.addMessage(formattedMessage);

        // Broadcast to other clients
        socketServer.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(formattedMessage));
          }
        });
      } catch (err) {
        console.error('Invalid message', err);
      }
    });

    // Respond to pong messages to mark connection as alive
    socket.on('close', () => {
      if (socket.user) {
        connectedUsers.delete(socket.user);
        broadcastUsers(socketServer);
      }
    });
  });

  // Ping clients periodically to check if they're still alive
  setInterval(() => {
    socketServer.clients.forEach((client) => {
      if (client.isAlive === false) return client.terminate();
      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };

