import Section from "./Section";
import GlitchText from "./GlitchText";
import Typer from "./Typer";
import { TYPER_LINES, HERO_TAGS } from "../data";

export default function Hero({ scrollTo }) {
  return (
    <Section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        justifyContent: "center", flexDirection: "column",
        textAlign: "center", padding: "0 20px",
      }}
    >
      {/* Orbital rings */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}>
        <div style={{
          width: 300, height: 300, borderRadius: "50%",
          border: "1px dashed #3b82f620",
          position: "relative", animation: "spin 20s linear infinite",
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: "#3b82f6",
            position: "absolute", top: -4, left: "50%", marginLeft: -4,
            boxShadow: "0 0 10px #3b82f6",
          }} />
        </div>
        <div style={{
          width: 500, height: 500, borderRadius: "50%",
          border: "1px dashed #06b6d420",
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          animation: "spinReverse 35s linear infinite",
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%", background: "#06b6d4",
            position: "absolute", top: -3, left: "50%", marginLeft: -3,
            boxShadow: "0 0 10px #06b6d4",
          }} />
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: 12,
          color: "#2563eb", letterSpacing: 4, marginBottom: 20,
          textTransform: "uppercase",
        }}>
          &lt;initializing profile/&gt;
        </div>

        <h1 style={{ fontSize: "clamp(42px, 8vw, 90px)", lineHeight: 1, marginBottom: 16 }}>
          <GlitchText text="RAMA SAI ANUDEEP ITHA" /><br />
          {/* <span style={{
            fontFamily: "'Orbitron', sans-serif",
            color: "#e2e8f0", fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 400,
          }}>
            ITHA
          </span> */}
        </h1>

        <div style={{ marginBottom: 32 }}>
          <Typer lines={TYPER_LINES} />
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="cta-btn" onClick={() => scrollTo("experience")}>
            <span>View Work</span>
          </button>
          <button
            className="cta-btn"
            onClick={() => scrollTo("contact")}
            style={{ borderColor: "#06b6d4", color: "#06b6d4" }}
          >
            <span>Connect</span>
          </button>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {HERO_TAGS.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%",
        animation: "float 2s ease-in-out infinite",
        color: "#64748b", fontSize: 12, fontFamily: "'Space Mono', monospace",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span>scroll_down</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(#3b82f6, transparent)" }} />
      </div>
    </Section>
  );
}
