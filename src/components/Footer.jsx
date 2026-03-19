export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #0f172a",
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "relative", zIndex: 1,
        fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#1e293b",
      }}
    >
      <span>© 2025 Rama Sai Anudeep Itha</span>
      <span style={{ color: "#2563eb50" }}>built_with: React + ❤</span>
    </footer>
  );
}
