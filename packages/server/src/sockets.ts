import WebSocket from 'ws';

function handleSockets(ws: WebSocket) {
  ws.on('message', (message: string) => {
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });
  ws.send('Hi there, I am a WebSocket server');
}

export default handleSockets;
