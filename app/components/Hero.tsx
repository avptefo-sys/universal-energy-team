export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-zinc-900"></div>

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
          padding: "20px",
        }}
      >
        <p
          style={{
            color: "#f97316",
            fontWeight: "bold",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          INTERNATIONAL BUSINESS
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "30px",
          }}
        >
          Universal Energy Team
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#d4d4d8",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto 50px",
          }}
        >
          Building Leaders Across Africa Through Entrepreneurship,
          Personal Development and Premium Lifestyle Products.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/2348137802166"
            target="_blank"
            style={{
              background: "#f97316",
              color: "white",
              padding: "16px 34px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Join Our Team
          </a>

          <a
            href="#products"
            style={{
              border: "2px solid #f97316",
              color: "#f97316",
              padding: "16px 34px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Explore Products
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "70px",
            marginTop: "90px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ color: "#f97316", fontSize: "42px" }}>20+</h2>
            <p>Countries</p>
          </div>

          <div>
            <h2 style={{ color: "#f97316", fontSize: "42px" }}>500+</h2>
            <p>Team Members</p>
          </div>

          <div>
            <h2 style={{ color: "#f97316", fontSize: "42px" }}>10+</h2>
            <p>Years Experience</p>
          </div>
        </div>

      </div>

    </section>
  );
}