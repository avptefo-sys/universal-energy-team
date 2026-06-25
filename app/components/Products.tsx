const products = [
  "HomePure Nova",
  "QVI Vacay",
  "Cimier",
  "Bernhard H. Mayer",
];

export default function Products() {
  return (
    <section id="products" className="bg-zinc-800 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-orange-500">
          Featured Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-zinc-900 p-6 text-center"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}