import { useState } from "react";
import Section from "./Section";
import { PROJECTS } from "../data";

function ProjectCard({ title, period, color, icon, tags, metric, metricLabel, points }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: `1px solid ${open ? color : "#1e293b"}`,
        borderRadius: 8,
        background: open ? `${color}08` : "#0a0f1e",
        transition: "all 0.3s ease",
        boxShadow: open ? `0 0 24px ${color}25` : "none",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: 2,
        background: `linear-gradient(90deg, ${color}, ${color}44, transparent)`,
        opacity: open ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      {/* Card header */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{ padding: "24px 28px", cursor: "pointer" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{
                fontSize: 20,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                borderRadius: 6,
                width: 40, height: 40,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {icon}
              </span>
              <div>
                <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
                  {title}
                </div>
                <div style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 11 }}>
                  {period}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {tags.map((t) => (
                <span key={t} style={{
                  padding: "3px 10px",
                  border: `1px solid ${color}30`,
                  borderRadius: 20,
                  fontSize: 10,
                  fontFamily: "'Space Mono', monospace",
                  color,
                  background: `${color}08`,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metric + toggle */}
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 26, fontWeight: 700,
              color,
              textShadow: `0 0 16px ${color}60`,
              lineHeight: 1,
            }}>
              {metric}
            </div>
            <div style={{
              fontSize: 9, fontFamily: "'Space Mono', monospace",
              color: "#64748b", marginTop: 4, marginBottom: 8,
              textTransform: "uppercase", letterSpacing: 1,
            }}>
              {metricLabel}
            </div>
            <div style={{ color, fontSize: 16 }}>{open ? "▲" : "▼"}</div>
          </div>
        </div>
      </div>

      {/* Expandable bullets */}
      {open && (
        <div style={{ padding: "0 28px 24px" }}>
          <div style={{ borderTop: `1px solid ${color}20`, paddingTop: 16 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {points.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "#94a3b8", fontSize: 13, lineHeight: 1.8 }}>
                  <span style={{ color, fontSize: 10, marginTop: 5, flexShrink: 0 }}>◆</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" style={{ padding: "80px 10%", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 3, marginBottom: 12 }}>
        03 / PROJECT_LOG
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif", fontSize: 36,
        color: "#60a5fa", marginBottom: 16,
        textShadow: "0 0 30px #3b82f640",
      }}>
        KEY PROJECTS
      </h2>
      <div style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 12, marginBottom: 40 }}>
        // click to expand
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </Section>
  );
}
