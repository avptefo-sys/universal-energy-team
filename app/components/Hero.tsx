
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-zinc-900 to-black"></div>

      <div className="relative z-10 text-center">
        <h1 className="mb-6 text-6xl font-extrabold text-orange-500">
          Universal Energy Team
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-300">
          Building Leaders Across Africa and Beyond
        </p>

        <a
          href="https://wa.me/2348137802166"
          target="_blank"
          className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white"
        >
          Join Us Today
        </a>
      </div>
    </section>
  );
}