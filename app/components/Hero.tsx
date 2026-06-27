import Earth from "./Earth";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050B16] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#050B16] to-black"></div>
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl"></div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl">
          Universal
        </h1>
        <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl">
          Energy Team
        </h1>
        <p className="mt-6 text-lg text-zinc-300 md:text-2xl">
          Empowering Entrepreneurs Worldwide
        </p>
        <div className="my-14">
          <Earth />
        </div>
        <a
          href="https://wa.me/2348137802166"
          target="_blank"
          className="rounded-full bg-orange-500 px-10 py-5 text-lg font-bold transition hover:scale-105"
        >
          Join Our Team
        </a>
      </div>
    </section>
  );
}