export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
   <div
  style={{
    display: "grid",
    gridTemplateColumns: "180px 1fr 180px",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    height: "80px",
  }}
>  

<h1 className="text-3xl font-extrabold tracking-wide text-orange-500">
  UET
</h1>

       <nav
  style={{
    display: "flex",
    gap: "40px",
    alignItems: "center",
  }}
> 

          <a
            href="#"
            className="text-white transition hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#products"
            className="text-white transition hover:text-orange-500"
          >
            Products
          </a>

          <a
            href="#contact"
            className="text-white transition hover:text-orange-500"
          >
            Contact
          </a>

        </nav>

        <a
          href="https://wa.me/2348137802166"
          target="_blank"
          className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
        >
          Join Now
        </a>

      </div>
    </header>
  );
}