"use client";

export default function ScrollToTop() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "1rem",
        background: "var(--nextra-card-background)",
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        zIndex: 100,
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </div>
  );
}
