const channels = ['general', 'announcements', 'support', 'random'];

export default function ChannelList() {
  return (
    <section className="hidden w-72 shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-200 xl:flex">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">Channels</h2>
        <button className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 transition hover:bg-white/10">Add</button>
      </div>
      <div className="space-y-2">
        {channels.map((channel) => (
          <button key={channel} className="w-full rounded-2xl px-4 py-3 text-left transition hover:bg-white/5">
            #{channel}
          </button>
        ))}
      </div>
    </section>
  );
}
