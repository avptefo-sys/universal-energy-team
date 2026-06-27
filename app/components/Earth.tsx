"use client";

export default function Earth() {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 30% 30%, #60a5fa, #1e3a8a 55%, #020617 100%)",
        boxShadow:
          "0 0 80px rgba(59,130,246,.45), inset -40px -40px 80px rgba(0,0,0,.45)",
      }}
    />
  );
}