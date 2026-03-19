import Section from "./Section";
import ExpCard from "./ExpCard";
import { EXPERIENCES } from "../data";

export default function Experience() {
  return (
    <Section id="experience" style={{ padding: "80px 10%", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 3, marginBottom: 12 }}>
        WORK_LOG
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif", fontSize: 36,
        color: "#60a5fa", marginBottom: 16,
        textShadow: "0 0 30px #3b82f640",
      }}>
        EXPERIENCE
      </h2>
      <div style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 12, marginBottom: 40 }}>
        // click to expand
      </div>
      {EXPERIENCES.map((e, i) => (
        <ExpCard key={i} {...e} />
      ))}
    </Section>
  );
}
