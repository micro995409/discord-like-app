import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../lib/auth';
import ChatWindow from '../../components/ChatWindow';
import ServerSidebar from '../../components/ServerSidebar';
import ChannelList from '../../components/ChannelList';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  return (
    <main className="min-h-screen bg-discord-900 px-4 py-4 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1600px] gap-4">
        <ServerSidebar />
        <ChannelList />
        <div className="flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
          <div className="border-b border-white/10 px-6 py-5">
            <h1 className="text-xl font-semibold text-white">General</h1>
            <p className="text-sm text-zinc-400">Welcome back, {session.user?.name ?? session.user?.email}.</p>
          </div>
          <ChatWindow />
        </div>
      </div>
    </main>
  );
}
