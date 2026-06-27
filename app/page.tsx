import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Why from "./components/Why";
import Products from "./components/Products";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Products />
      <section
        id="contact"
        className="bg-zinc-800 px-6 py-24 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-sky-400">
          Contact Us
        </h2>
        <div className="space-y-4 text-lg">
          <a
            href="https://wa.me/2348137802166"
            target="_blank"
            className="block transition hover:text-sky-400"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/uenergy_ng"
            target="_blank"
            className="block transition hover:text-sky-400"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@uenergy_ng"
            target="_blank"
            className="block transition hover:text-sky-400"
          >
            TikTok
          </a>
        </div>
      </section>
    </main>
  );
}