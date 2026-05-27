'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import type { Socket } from 'socket.io-client';

interface MessageInputProps {
  socket: Socket | null;
}

export default function MessageInput({ socket }: MessageInputProps) {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim() || !socket) return;
    socket.emit('message', {
      content: message,
      createdAt: new Date().toISOString(),
      sender: session?.user?.name || session?.user?.email || 'Anonymous'
    });
    setMessage('');
  };

  return (
    <form onSubmit={handleSend} className="flex items-center gap-3 border-t border-white/10 bg-discord-900 p-4">
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded-3xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"
      />
      <button type="submit" className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
        Send
      </button>
    </form>
  );
}
