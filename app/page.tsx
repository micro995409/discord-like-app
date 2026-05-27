import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-discord-900 px-6 py-16">
      <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30">
        <h1 className="text-4xl font-semibold text-white">Discord-style Chat</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          A modern community chat application built with Next.js, Socket.IO, MongoDB, and NextAuth.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/login" className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
            Sign in
          </Link>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
            View dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
