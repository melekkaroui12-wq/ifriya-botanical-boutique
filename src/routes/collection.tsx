import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/collection")({
  component: Collection,
});

function Collection() {
  const { add } = useCart();
  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <p className="eyebrow animate-fade">La collection</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-primary leading-[1.02] animate-rise">
          Cinq pains <em className="italic font-light">botaniques.</em>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-base/relaxed text-foreground/80 animate-rise" style={{ animationDelay: "150ms" }}>
          Chaque savon est une lecture d&rsquo;un paysage tunisien : un olivier centenaire,
          une colline de romarin, un jardin d&rsquo;orangers, un machmoum de jasmin, un laurier ancestral.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto space-y-32 pb-20">
        {products.map((p, idx) => (
          <Reveal key={p.id}>
            <article
              className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-6">
                <div className="aspect-[4/5] bg-[color:var(--color-secondary)] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <p className="eyebrow">N&deg;0{idx + 1} &middot; {p.latin}</p>
                <h2 className="mt-4 font-serif text-5xl text-primary">{p.name}</h2>
                <p className="mt-2 text-base text-muted-foreground italic">{p.tagline}</p>
                <p className="mt-7 text-base/relaxed text-foreground/85">{p.description}</p>

                <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
                  <div>
                    <p className="eyebrow mb-3">Sensoriel</p>
                    <p className="text-foreground/80 leading-relaxed">{p.sensorial}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Bienfaits</p>
                    <ul className="space-y-1 text-foreground/80">
                      {p.benefits.map((b) => <li key={b}>&middot; {b}</li>)}
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <p className="eyebrow mb-3">Ingr&eacute;dients</p>
                    <p className="text-foreground/80">{p.ingredients.join(" &middot; ")}</p>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                  <div>
                    <p className="eyebrow">Pain de 110 g</p>
                    <p className="mt-1 font-serif text-2xl text-primary tabular-nums">{p.price} &euro;</p>
                  </div>
                  <button onClick={() => add(p.id)} className="btn-solid">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
