import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Hero />
      <Products />

      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-orange-500">
          About Universal Energy Team
        </h2>

        <p className="text-lg text-zinc-300">
          Universal Energy Team helps individuals build an international
          business through leadership, entrepreneurship, personal development,
          and world-class lifestyle products.
        </p>
      </section>

      <section
        id="contact"
        className="bg-zinc-800 px-6 py-24 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-orange-500">
          Contact Us
        </h2>

        <div className="space-y-4">
          <a
            href="https://wa.me/2348137802166"
            target="_blank"
            className="block hover:text-orange-500"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/uenergy_ng"
            target="_blank"
            className="block hover:text-orange-500"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com/@uenergy_ng"
            target="_blank"
            className="block hover:text-orange-500"
          >
            TikTok
          </a>
        </div>
      </section>
    </main>
  );
}