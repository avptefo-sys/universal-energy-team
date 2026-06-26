export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black p-6">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
       <h1 style={{ color: "orange", fontSize: "32px" }}>UET</h1>
        <div
          style={{
            display: "flex",
            gap: "40px",
            color: "white",
          }}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>

        <button
          style={{
            background: "orange",
            color: "white",
            borderRadius: "30px",
            padding: "12px 24px",
            border: "none",
          }}
        >
          Join
        </button>
      </div>
    </header>
  );
}