export default function Why() {
  const items = [
    {
      title: "Global Business",
      text: "Build your business across multiple countries."
    },
    {
      title: "Leadership",
      text: "Develop world-class leadership and communication skills."
    },
    {
      title: "Premium Products",
      text: "Promote internationally recognized lifestyle products."
    }
  ];

  return (
    <section
      style={{
        background: "#111",
        color: "white",
        padding: "100px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            color: "#f97316",
            fontSize: "48px",
            marginBottom: "20px"
          }}
        >
          Why Universal Energy Team?
        </h2>

        <p
          style={{
            color: "#ccc",
            maxWidth: "700px",
            margin: "0 auto 60px"
          }}
        >
          We help people build a global business while becoming better
          leaders and creating a better lifestyle.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#18181b",
                width: "320px",
                padding: "35px",
                borderRadius: "18px"
              }}
            >
              <h3
                style={{
                  color: "#f97316",
                  marginBottom: "20px",
                  fontSize: "28px"
                }}
              >
                {item.title}
              </h3>

              <p style={{ color: "#ddd" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}