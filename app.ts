// TypeScript: Mapped & Conditional Utility Types (Day 37)
// Day 37 - Type-Safe Application Development (Advanced)

console.log("=== TypeScript: Mapped & Conditional Utility Types (Day 37) ===");

interface MetricPayload {
  day: number;
  topic: string;
  timestamp: string;
  status: "active" | "completed";
}

class PipelineEngine {
  private history: MetricPayload[] = [];

  constructor(private name: string) {}

  public record(metric: MetricPayload): void {
    this.history.push(metric);
    console.log(`[${this.name}] Recorded: ${metric.topic} (Status: ${metric.status})`);
  }

  public getSummary() {
    return {
      totalEntries: this.history.length,
      latest: this.history[this.history.length - 1]
    };
  }
}

const engine = new PipelineEngine("utility-types");
engine.record({
  day: 37,
  topic: "TypeScript: Mapped & Conditional Utility Types (Day 37)",
  timestamp: new Date().toISOString(),
  status: "active"
});

console.log("Telemetry Summary:", engine.getSummary());
