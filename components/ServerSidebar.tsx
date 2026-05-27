import Link from 'next/link';

const servers = ['DevOps', 'Design', 'Gaming', 'Support'];

export default function ServerSidebar() {
  return (
    <aside className="hidden w-20 shrink-0 flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-center md:flex">
      <div className="rounded-3xl bg-violet-600 p-3 text-white">D</div>
      <div className="space-y-3">
        {servers.map((server) => (
          <Link key={server} href="#" className="block rounded-3xl bg-white/5 px-3 py-3 text-sm text-zinc-200 transition hover:bg-violet-600/80 hover:text-white">
            {server.charAt(0)}
          </Link>
        ))}
      </div>
    </aside>
  );
}
