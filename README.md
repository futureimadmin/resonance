# Resonance — Agentic Profiler

**Unified observability for AI agents.** See how agents run and consume CPU, NPU/GPU, Memory, and Tokens (request & response). Trace view + Snapshot view. Built on OpenTelemetry GenAI conventions so it works across Python, Java, Node, and more.

## What it shows

| Signal | Source |
|--------|--------|
| Agent runs, steps, tool calls, handoffs | OTel GenAI spans (`invoke_agent`, `chat`, `execute_tool`, …) |
| Tokens in / out (and cached/reasoning) | `gen_ai.usage.*` attributes |
| Latency, errors, cost | Derived from spans + model price list |
| CPU, Memory | Process / container metrics |
| GPU | DCGM / OpenLIT / NVML → OTLP |
| NPU | Best-effort process + vendor exporters |

## Views

1. **Overview** — live agent table, aggregate tokens/cost/latency, resource gauges.
2. **Trace** — hierarchical waterfall of a single run with token breakdown and correlated resource overlay.
3. **Snapshot** — point-in-time “agent top”: PIDs/pods, current CPU/Mem/accel, active spans, quick inspect of live stack.

## Architecture (production)

```
Agents (any language)
  → OpenTelemetry SDK + GenAI / framework instrumentation
    → OTLP → OpenTelemetry Collector (enrich, sample, redact)
      → Traces: Langfuse / Phoenix / Tempo / Jaeger
      → Metrics: Prometheus / VictoriaMetrics
      → GPU: OpenLIT GPU collector or DCGM exporter
        → Resonance UI (this project) + Grafana
```

Correlation uses shared resource attributes (`service.name`, `agent.name`, `k8s.pod.uid`, `process.pid`) and `trace_id`.

## Quick demo (no install)

Open `demo/index.html` in a browser. Fully interactive mock of Overview / Trace / Snapshot.

## Real app (Next.js)

```bash
npm install
npm run dev
```

The App Router sources under `src/` are the starting point for a production dashboard that queries real backends (Langfuse API, Prometheus, etc.).

## Integration points

- **Langfuse / Phoenix / LangSmith** — primary agent trace UIs; Resonance deep-links or embeds and adds resource correlation + Snapshot.
- **Prometheus + Grafana** — resource and token metrics.
- **OpenTelemetry Collector** — single control plane for sampling and PII redaction.
- Frameworks: LangChain/LangGraph, CrewAI, OpenAI Agents SDK, Pydantic AI, etc. already emit (or can emit) OTel GenAI spans.

## Multi-language

Any language with an OpenTelemetry SDK can emit the same spans and metrics. Python, Java, Node, Go, etc. are first-class.

## Status

Prototype + interactive demo. Ready to wire to real OTel pipelines and expand the Next.js UI.

## License

MIT
