import Section from "./Section";
import SkillBar from "./SkillBar";
import { SKILLS, TECH_INVENTORY } from "../data";

export default function Skills() {
  return (
    <Section id="skills" style={{ padding: "80px 10%", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 3, marginBottom: 12 }}>
        SKILL_MATRIX
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif", fontSize: 36,
        color: "#60a5fa", marginBottom: 48,
        textShadow: "0 0 30px #3b82f640",
      }}>
        TECH STACK
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#64748b", letterSpacing: 2, marginBottom: 20 }}>
            &gt; CORE_PROFICIENCY
          </div>
          {SKILLS.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </div>

        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#64748b", letterSpacing: 2, marginBottom: 20 }}>
            &gt; TECH_INVENTORY
          </div>
          {TECH_INVENTORY.map(([cat, tags]) => (
            <div key={cat} style={{ marginBottom: 20 }}>
              <div style={{ color: "#60a5fa", fontSize: 11, fontFamily: "'Space Mono', monospace", marginBottom: 8 }}>
                {cat}
              </div>
              <div>
                {tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
