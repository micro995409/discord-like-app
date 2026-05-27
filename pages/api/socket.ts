import { NextApiRequest, NextApiResponse } from 'next';
import { Server as IOServer } from 'socket.io';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const serverSocket = res.socket as any;
  if (!serverSocket) {
    return res.end();
  }

  if (!serverSocket.server.io) {
    const io = new IOServer(serverSocket.server as any, {
      path: '/api/socket',
      cors: {
        origin: process.env.NEXTAUTH_URL || '*',
        methods: ['GET', 'POST']
      }
    });

    io.on('connection', (socket) => {
      socket.on('message', (msg) => {
        io.emit('message', msg);
      });

      socket.on('typing', (user) => {
        socket.broadcast.emit('typing', user);
      });
    });

    serverSocket.server.io = io;
  }
  res.end();
}
