import Section from "./Section";
import { CONTACT_LINKS } from "../data";

export default function Contact() {
  return (
    <Section id="contact" style={{ padding: "80px 10% 120px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 3, marginBottom: 12 }}>
        ESTABLISH_CONNECTION
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(32px, 6vw, 60px)",
        color: "#60a5fa", marginBottom: 24,
        textShadow: "0 0 40px #3b82f680",
      }}>
        LET'S BUILD<br />SOMETHING
      </h2>
      <p style={{ color: "#64748b", fontSize: 14, fontFamily: "'Space Mono', monospace", marginBottom: 48 }}>
        Open to senior SWE · engineering leadership · distributed systems roles
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
        {CONTACT_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            style={{
              border: `1px solid ${item.color}40`,
              borderRadius: 8, padding: "20px 32px",
              background: `${item.color}05`,
              textDecoration: "none",
              transition: "all 0.3s",
              display: "block",
              boxShadow: `0 0 0px ${item.color}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${item.color}40`;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0px ${item.color}`;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 10, color: item.color, letterSpacing: 3, marginBottom: 8 }}>
              {item.label}
            </div>
            <div style={{ color: "#e2e8f0", fontFamily: "'Space Mono', monospace", fontSize: 13 }}>
              {item.value}
            </div>
          </a>
        ))}
      </div>

      <div style={{ color: "#1e293b", fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2 }}>
        ── EOF ──
      </div>
    </Section>
  );
}
