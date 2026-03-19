import Section from "./Section";
import { EDUCATION } from "../data";

export default function Education() {
  return (
    <Section id="education" style={{ padding: "80px 10%", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 3, marginBottom: 12 }}>
        05 / EDUCATION_DB
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif", fontSize: 36,
        color: "#60a5fa", marginBottom: 48,
        textShadow: "0 0 30px #3b82f640",
      }}>
        EDUCATION
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {EDUCATION.map((e) => (
          <div
            key={e.school}
            style={{
              border: `1px solid ${e.color}40`,
              borderRadius: 8, padding: 28,
              background: `${e.color}05`,
              position: "relative",
              boxShadow: `0 0 30px ${e.color}15`,
              transition: "transform 0.3s",
            }}
            onMouseEnter={(ev) => (ev.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(ev) => (ev.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{
              position: "absolute", top: 16, right: 16,
              background: e.color, color: "#030712",
              fontSize: 9, fontFamily: "'Orbitron', sans-serif",
              letterSpacing: 1, padding: "3px 8px", borderRadius: 2,
            }}>
              {e.badge}
            </div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, color: e.color, marginBottom: 12, letterSpacing: 2 }}>
              {e.year}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>
              {e.degree}
            </div>
            <div style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 12 }}>
              {e.school}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
