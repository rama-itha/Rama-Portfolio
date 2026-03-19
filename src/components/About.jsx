import Section from "./Section";
import SkillBar from "./SkillBar";
import { SKILLS, TECH_INVENTORY, ABOUT_STATS } from "../data";

export default function About() {
  return (
    <Section id="about" style={{ padding: "100px 10% 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

        {/* Left — bio */}
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 3, marginBottom: 12 }}>
            01 / ABOUT_ME
          </div>
          <h2 style={{
            fontFamily: "'Orbitron', sans-serif", fontSize: 36,
            color: "#60a5fa", marginBottom: 24,
            textShadow: "0 0 30px #3b82f640",
          }}>
            WHO AM I?
          </h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
            I'm a Software Development Engineer II at{" "}
            <span style={{ color: "#60a5fa" }}>AWS CloudFront</span>, architecting global content
            delivery infrastructure that serves customers across every major region worldwide.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            My work spans from{" "}
            <span style={{ color: "#60a5fa" }}>capacity management automation</span> processing
            10M+ events/second to cross-functional program delivery across 10+ engineering teams.
            Outside AWS, I founded{" "}
            <span style={{ color: "#06b6d4" }}>RoomieHub</span> — taking a product from zero to
            5K+ users with a 25-person team.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {ABOUT_STATS.map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 32, color: "#3b82f6", textShadow: "0 0 20px #3b82f6" }}>
                  {n}
                </div>
                <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — code block */}
        <div style={{ position: "relative" }}>
          <div style={{
            background: "#0a0f1e", border: "1px solid #1e293b",
            borderRadius: 8, padding: 24,
            fontFamily: "'Space Mono', monospace", fontSize: 12, lineHeight: 2,
            boxShadow: "0 0 40px #3b82f610",
          }}>
            <div style={{ color: "#64748b", marginBottom: 8 }}>// rama.profile.json</div>
            <div>
              <span style={{ color: "#06b6d4" }}>const</span>{" "}
              <span style={{ color: "#60a5fa" }}>profile</span> = {"{"}
            </div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#64748b" }}>name:</span> <span style={{ color: "#86efac" }}>"Rama Sai Anudeep Itha"</span>,</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#64748b" }}>role:</span> <span style={{ color: "#86efac" }}>"SDE II @ AWS CloudFront"</span>,</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#64748b" }}>location:</span> <span style={{ color: "#86efac" }}>"Seattle, Washington"</span>,</div>
            <div style={{ paddingLeft: 16 }}><span style={{ color: "#64748b" }}>focus:</span> [</div>
            <div style={{ paddingLeft: 32 }}><span style={{ color: "#86efac" }}>"Distributed Systems"</span>,</div>
            <div style={{ paddingLeft: 32 }}><span style={{ color: "#86efac" }}>"Capacity Engineering"</span>,</div>
            <div style={{ paddingLeft: 32 }}><span style={{ color: "#86efac" }}>"Cloud Infrastructure"</span></div>
            <div style={{ paddingLeft: 16 }}>],</div>
            <div style={{ paddingLeft: 16 }}>
              <span style={{ color: "#64748b" }}>status:</span>{" "}
              <span style={{ color: "#fbbf24" }}>"open_to_opportunities"</span>
            </div>
            <div>{"}"}</div>
            <div style={{ marginTop: 8, color: "#3b82f6", animation: "blink 1s infinite" }}>▌</div>
          </div>
          <div style={{
            position: "absolute", top: -10, right: -10, width: 80, height: 80,
            border: "1px solid #2563eb30", borderRadius: "50%",
            animation: "spin 8s linear infinite",
          }} />
        </div>
      </div>
    </Section>
  );
}
