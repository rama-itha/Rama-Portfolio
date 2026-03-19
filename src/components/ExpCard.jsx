import { useState } from "react";

export default function ExpCard({ title, company, period, points, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      style={{
        border: `1px solid ${open ? color : "#1e293b"}`,
        borderRadius: 8,
        padding: "20px 24px",
        marginBottom: 16,
        background: open ? `${color}08` : "#0a0f1e",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: open ? `0 0 20px ${color}30` : "none",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ color, fontFamily: "'Courier New', monospace", fontSize: 13, marginBottom: 4 }}>
            {company}
          </div>
          <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 16 }}>{title}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#64748b", fontSize: 12, fontFamily: "'Courier New', monospace" }}>
            {period}
          </div>
          <div style={{ color, fontSize: 18, marginTop: 4 }}>{open ? "▲" : "▼"}</div>
        </div>
      </div>
      {open && (
        <ul style={{ marginTop: 16, paddingLeft: 16, color: "#94a3b8", fontSize: 13, lineHeight: 1.9 }}>
          {points.map((p, i) => (
            <li key={i} style={{ marginBottom: 6 }}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
