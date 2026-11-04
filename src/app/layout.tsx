import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resonance — Agentic Profiler",
  description: "Unified observability for AI agents: traces, tokens, CPU, Memory, NPU/GPU",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0e0f0c] text-[#f0ece3] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
