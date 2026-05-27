import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function initSocket() {
  if (!socket) {
    socket = io('/api/socket');
  }
  return socket;
}

export function getSocket() {
  return socket;
}
