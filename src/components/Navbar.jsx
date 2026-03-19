import { NAV_LINKS } from "../data";

export default function Navbar({ navActive, scrollTo }) {
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(3,7,18,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #0f172a",
        padding: "0 40px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, color: "#3b82f6", letterSpacing: 3 }}>
        RAMA<span style={{ color: "#06b6d4" }}>://</span>dev
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link ${navActive === l ? "active" : ""}`}
            onClick={() => scrollTo(l)}
            style={{ border: "none", background: "none" }}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}
