export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-orange-500">
          Universal Energy Team
        </h1>

        <div className="hidden gap-6 md:flex">
          <a href="#about" className="hover:text-orange-500">
            About
          </a>

          <a href="#products" className="hover:text-orange-500">
            Products
          </a>

          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}