export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.5rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "0.9rem",
          color: "rgba(247,244,239,0.38)",
          letterSpacing: "0.03em",
        }}
      >
        David Oluwasegun Bilewumi — Administrative Assistant
      </span>
      <span
        style={{
          fontSize: "0.72rem",
          color: "rgba(247,244,239,0.22)",
          letterSpacing: "0.07em",
        }}
      >
        Port Harcourt, Nigeria · Open to opportunities
      </span>
    </footer>
  );
}
