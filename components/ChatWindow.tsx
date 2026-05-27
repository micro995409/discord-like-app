'use client';

import { useEffect, useState } from 'react';
import { initSocket } from '../lib/socket';
import MessageInput from './MessageInput';

interface ChatMessage {
  content: string;
  createdAt: string;
  sender?: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const clientSocket = initSocket();
    setSocket(clientSocket);

    clientSocket.on('message', (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    clientSocket.on('connect_error', (error: Error) => {
      console.error('Socket connection error:', error);
    });

    return () => {
      clientSocket.off('message');
    };
  }, []);

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden">
      <div className="h-full overflow-y-auto px-6 py-6">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <p className="text-sm text-zinc-400">No messages yet. Start the conversation.</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-3 text-sm text-zinc-400">
                  <span>{message.sender ?? 'Anonymous'}</span>
                  <span>{new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-100">{message.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <MessageInput socket={socket} />
    </div>
  );
}
