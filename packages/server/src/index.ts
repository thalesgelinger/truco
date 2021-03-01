import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import routes from './routes';
import handleSockets from './sockets';

const PORT = process.env.PORT || 3333;
const app = express();
const server = http.createServer(app);
export const wss = new WebSocket.Server({ server });

app.use(routes);

wss.on('connection', handleSockets);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
