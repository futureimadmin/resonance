import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Resonance</h1>
        <p className="text-[#8a9e90] mt-1">Agentic Profiler</p>
      </div>
      <p className="text-[#f0ece3]/80 max-w-2xl mb-8">
        See how agents run and consume CPU, NPU/GPU, Memory, and Tokens.
        Trace view and Snapshot view. Built on OpenTelemetry GenAI conventions.
      </p>
      <div className="flex gap-4">
        <a
          href="/demo.html"
          className="px-4 py-2 rounded-lg bg-[#8a9e90]/20 text-[#8a9e90] border border-[#8a9e90]/30 hover:bg-[#8a9e90]/30"
        >
          Open interactive demo
        </a>
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-lg border border-[#2e2f2b] hover:bg-[#1a1b18]"
        >
          Dashboard (scaffold)
        </Link>
      </div>
      <div className="mt-16 grid sm:grid-cols-3 gap-4 text-sm">
        <div className="p-4 rounded-xl border border-[#2e2f2b] bg-[#1a1b18]">
          <div className="font-medium mb-1">Overview</div>
          <div className="text-[#f0ece3]/60">Live agents, tokens, cost, resources</div>
        </div>
        <div className="p-4 rounded-xl border border-[#2e2f2b] bg-[#1a1b18]">
          <div className="font-medium mb-1">Trace</div>
          <div className="text-[#f0ece3]/60">Waterfall + token breakdown + resource overlay</div>
        </div>
        <div className="p-4 rounded-xl border border-[#2e2f2b] bg-[#1a1b18]">
          <div className="font-medium mb-1">Snapshot</div>
          <div className="text-[#f0ece3]/60">Live process / pod + active spans</div>
        </div>
      </div>
    </main>
  );
}
