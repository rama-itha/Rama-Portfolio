import { useRef, useState, useEffect } from "react";

export default function SkillBar({ label, pct, color }) {
  const [filled, setFilled] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setFilled(pct), 200); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ color: "#e2e8f0", fontSize: 13, fontFamily: "'Courier New', monospace" }}>
          {label}
        </span>
        <span style={{ color, fontSize: 12 }}>{pct}%</span>
      </div>
      <div style={{ height: 4, background: "#1e293b", borderRadius: 2, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            borderRadius: 2,
            transition: "width 1.2s cubic-bezier(0.23,1,0.32,1)",
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>
    </div>
  );
}
