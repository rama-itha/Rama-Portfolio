import { useState, useEffect } from "react";

const BOOT_LINES = [
  { text: "Initializing RAMA SAI ANUDEEP ITHA portfolio...", delay: 0 },
  { text: "Loading Software Devlopment Engineer profile...", delay: 320 },
  { text: "Connecting to AWS CloudFront infrastructure...", delay: 680 },
  { text: "Mounting systems... OK", delay: 1050 },
  { text: "Verifying data throughput... OK", delay: 1380 },
  { text: "Loading projects and experience data... OK", delay: 1700 },
  { text: "Calibrating particle network... OK", delay: 2020 },
  { text: "System ready. Launching portfolio...", delay: 2350 },
];

const BAR_DURATION = 4000;

export default function LoadingScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map(({ text, delay }) =>
      setTimeout(() => setLines((prev) => [...prev, text]), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const pct = Math.min(((now - start) / BAR_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9000,
      background: "#030712",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 20px",
      opacity: exiting ? 0 : 1,
      transition: "opacity 0.6s ease",
    }}>
      {/* Scanlines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
      }} />

      {/* Orbital rings */}
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", border: "1px dashed #3b82f610", animation: "spin 24s linear infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", border: "1px dashed #06b6d415", animation: "spinReverse 16s linear infinite", pointerEvents: "none" }} />

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: 48 }}>
        <div style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 900,
          color: "#3b82f6",
          textShadow: "0 0 40px #3b82f680, 0 0 80px #3b82f630",
          letterSpacing: 6, marginBottom: 8,
          animation: "pulseGlow 2.5s ease-in-out infinite",
        }}>
          RAMA<span style={{ color: "#06b6d4" }}>://</span>DEV
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#2563eb", letterSpacing: 4, textTransform: "uppercase" }}>
          &lt;portfolio v2.0 — booting/&gt;
        </div>
      </div>

      {/* Terminal window */}
      <div style={{
        position: "relative", zIndex: 1,
        width: "100%", maxWidth: 580,
        background: "#080e1e", border: "1px solid #1e293b", borderRadius: 8,
        overflow: "hidden", marginBottom: 32,
        boxShadow: "0 0 40px #3b82f615, 0 0 80px #3b82f608",
      }}>
        <div style={{ background: "#0a1628", borderBottom: "1px solid #1e293b", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", opacity: 0.7 }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", opacity: 0.7 }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", opacity: 0.7 }} />
          <div style={{ marginLeft: 8, fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#334155", letterSpacing: 2 }}>
            bash — portfolio.init
          </div>
        </div>
        <div style={{ padding: "20px 24px", minHeight: 200 }}>
          {lines.map((line, i) => (
            <div key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, lineHeight: 1.9, display: "flex", gap: 10, alignItems: "flex-start", animation: "fadeSlideIn 0.25s ease forwards" }}>
              <span style={{ color: "#06b6d4", flexShrink: 0 }}>›</span>
              <span style={{ color: line.endsWith("OK") ? "#22c55e" : line.includes("ready") ? "#60a5fa" : "#64748b" }}>
                {line}
              </span>
            </div>
          ))}
          {lines.length < BOOT_LINES.length && (
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 2 }}>
              <span style={{ color: "#06b6d4", fontFamily: "'Space Mono', monospace", fontSize: 12 }}>›</span>
              <span style={{ color: "#3b82f6", animation: "blink 0.8s step-end infinite", fontFamily: "'Space Mono', monospace", fontSize: 14 }}>▌</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 580 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#334155", marginBottom: 8, letterSpacing: 2 }}>
          <span>LOADING_PORTFOLIO</span>
          <span style={{ color: "#3b82f6" }}>{Math.floor(progress)}%</span>
        </div>
        <div style={{ height: 3, background: "#0f172a", borderRadius: 2, overflow: "hidden" }}>
          <div style={{
            height: "100%", width: `${progress}%`,
            background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #06b6d4)",
            borderRadius: 2, boxShadow: "0 0 12px #3b82f680",
            transition: "width 0.05s linear",
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          {[0, 25, 50, 75, 100].map((tick) => (
            <div key={tick} style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: progress >= tick ? "#1d4ed8" : "#1e293b", transition: "color 0.3s" }}>
              {tick}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}