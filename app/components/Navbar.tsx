import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr 180px",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px",
          height: "88px",
        }}
      >
        {/* Logo */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Universal Energy Team"
            width={60}
            height={60}
            priority
          />

          <div>
            <div
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Universal
            </div>

            <div
              style={{
                color: "#4ea5ff",
                fontSize: "15px",
              }}
            >
              Energy Team
            </div>
          </div>
        </div>

        {/* Menu */}

        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "45px",
          }}
        >
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Join */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="https://wa.me/2348137802166"
            target="_blank"
            style={{
              background: "#ff7a00",
              color: "white",
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
}