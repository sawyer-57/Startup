const { WebSocketServer, WebSocket } = require('ws');
const DB = require('./database.js'); // make sure you require your DB

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

        // Save the message to the DB
        await DB.addMessage(message);

        // Broadcast to other clients
        socketServer.clients.forEach((client) => {
          if (client !== socket && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
          }
        });
      } catch (err) {
        console.error('Invalid message', err);
      }
    });

    // Respond to pong messages to mark connection as alive
    socket.on('pong', () => {
      socket.isAlive = true;
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