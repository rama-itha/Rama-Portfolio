import { useState, useEffect } from "react";

export default function Typer({ lines }) {
  const [displayed, setDisplayed] = useState([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);

  useEffect(() => {
    if (curLine >= lines.length) return;
    if (curChar < lines[curLine].length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[curLine] = (next[curLine] || "") + lines[curLine][curChar];
          return next;
        });
        setCurChar((c) => c + 1);
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurLine((l) => l + 1);
        setCurChar(0);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [curLine, curChar, lines]);

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        fontSize: 14,
        color: "#60a5fa",
        lineHeight: 1.8,
      }}
    >
      {displayed.map((l, i) => (
        <div key={i}>
          <span style={{ color: "#06b6d4" }}>$ </span>
          <span>{l}</span>
          {i === curLine && (
            <span style={{ animation: "blink 1s infinite" }}>▌</span>
          )}
        </div>
      ))}
    </div>
  );
}
