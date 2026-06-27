export default function About() {
  return (
    <section className="bg-[#07111F] py-28 px-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sky-400 font-semibold tracking-[4px] uppercase">
            About Us
          </p>
          <h2 className="mt-4 text-5xl font-extrabold">
            More Than A Business
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-zinc-300">
            Universal Energy Team is an international community of
            entrepreneurs dedicated to empowering individuals through
            leadership, digital business, personal development, and
            premium lifestyle solutions.
            <br /><br />
            We believe success is built through education,
            teamwork, continuous growth, and a powerful support system.
            Our mission is to help people create sustainable businesses,
            unlock their potential, and build a prosperous future
            regardless of geographical boundaries.
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-sky-700/40 bg-sky-950/20 p-8 text-center transition hover:-translate-y-2 hover:border-sky-400">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold">
              Leadership
            </h3>
            <p className="mt-4 text-zinc-300">
              Developing confident leaders who inspire others through
              education, vision, and action.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-700/40 bg-sky-950/20 p-8 text-center transition hover:-translate-y-2 hover:border-sky-400">
            <div className="text-5xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold">
              Global Community
            </h3>
            <p className="mt-4 text-zinc-300">
              Connecting entrepreneurs across different countries
              to create one powerful international network.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-700/40 bg-sky-950/20 p-8 text-center transition hover:-translate-y-2 hover:border-sky-400">
            <div className="text-5xl mb-6">💎</div>
            <h3 className="text-2xl font-bold">
              Premium Lifestyle
            </h3>
            <p className="mt-4 text-zinc-300">
              Offering premium products and services designed to
              improve wellness, prestige, and quality of life.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-700/40 bg-sky-950/20 p-8 text-center transition hover:-translate-y-2 hover:border-sky-400">
            <div className="text-5xl mb-6">📈</div>
            <h3 className="text-2xl font-bold">
              Entrepreneurship
            </h3>
            <p className="mt-4 text-zinc-300">
              Helping individuals build independent businesses with
              long-term vision and sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}