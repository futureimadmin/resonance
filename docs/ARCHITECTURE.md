# Resonance Architecture

## Goals

- Language-agnostic agent observability (Python, Java, Node, …)
- Correlate application traces (tokens, steps) with system resources (CPU, Mem, GPU/NPU)
- Trace view (waterfall / hierarchical) and Snapshot view (live process + agent context)
- Integrate with existing tools rather than replace them

## Data model (high level)

**Trace / Span**
- Root: `invoke_agent` or workflow span
- Children: `chat` / generation, `execute_tool`, retrieval, handoff, evaluator
- Attributes: model, tokens in/out, tool name/args (when enabled), latency, error

**Metrics**
- `gen_ai.client.token.usage` (or counters)
- Process / container: CPU, memory
- Hardware: `hw.gpu.*` (OpenTelemetry hardware conventions) + vendor NPU metrics when available

**Correlation keys**
- `trace_id`, `span_id`
- Resource: `service.name`, `agent.name`, `k8s.pod.uid`, `process.pid`

## Pipeline

1. Instrumentation (framework auto or manual OTel)
2. OTLP → Collector (enrich with k8s/process, sample, redact)
3. Fan-out to specialized stores
4. Resonance UI queries stores and joins on the correlation keys

## UI components (planned / demo)

- Live agent table
- Token & cost time series
- Resource gauges
- Waterfall with resource overlay
- Snapshot table + live stack inspect

## Extending

- Replace mock data with Langfuse / Prometheus queries
- Add cost calculator from model price map
- Tail-based sampling rules in the Collector for expensive runs
