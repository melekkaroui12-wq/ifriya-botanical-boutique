import { createFileRoute, Link } from "@tanstack/react-router";
import heroSoap from "@/assets/product-olea.jpg";
import storyOlives from "@/assets/story-olives.jpg";
import botanical from "@/assets/botanical-flatlay.jpg";
import methodCraft from "@/assets/method-craft.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] pt-20 grid md:grid-cols-2 items-center gap-10 md:gap-0 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="order-2 md:order-1 md:pr-16 py-12 md:py-0">
          <p className="eyebrow animate-fade">Maison de savons botaniques &middot; Tunisie</p>
          <h1 className="mt-6 font-serif text-[3.2rem] md:text-[5rem] leading-[0.98] text-primary animate-rise">
            La m&eacute;moire<br />v&eacute;g&eacute;tale<br /><em className="italic font-light">de la Tunisie.</em>
          </h1>
          <p className="mt-8 max-w-md text-base/relaxed text-foreground/80 animate-rise" style={{ animationDelay: "180ms" }}>
            Savons botaniques fabriqu&eacute;s &agrave; froid &agrave; partir d&rsquo;ingr&eacute;dients biologiques
            m&eacute;diterran&eacute;ens, dans la tradition silencieuse des oliveraies.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 animate-rise" style={{ animationDelay: "320ms" }}>
            <Link to="/collection" className="btn-solid">D&eacute;couvrir la collection</Link>
            <Link to="/histoire" className="link-quiet text-xs tracking-[0.28em] uppercase text-primary">
              Notre histoire
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 relative animate-fade">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src={heroSoap}
              alt="Savon IFRIYA — pain botanique embossé"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="eyebrow absolute -bottom-2 left-0 md:left-6 bg-background pr-4 pt-3">
            Pain N&deg;01 — Olea
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-6">
          <img src={storyOlives} alt="Oliveraies tunisiennes" loading="lazy" className="w-full h-auto" />
        </Reveal>
        <Reveal delay={150} className="md:col-span-5 md:col-start-8">
          <p className="eyebrow">L&rsquo;histoire d&rsquo;Ifriya</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-primary leading-tight">
            Une maison n&eacute;e des terres anciennes.
          </h2>
          <p className="mt-6 text-base/relaxed text-foreground/80">
            Ifriya — nom antique de l&rsquo;Afrique du Nord — puise dans la m&eacute;moire v&eacute;g&eacute;tale
            de la Tunisie : oliveraies centenaires du Sahel, jardins de Nabeul,
            collines de romarin et de laurier. Chaque savon est une lecture
            sensorielle de ce paysage.
          </p>
          <Link to="/histoire" className="mt-8 inline-block link-quiet text-xs tracking-[0.28em] uppercase text-primary">
            Lire le r&eacute;cit complet
          </Link>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-secondary)] py-32">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Nos plantes</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-primary leading-tight">
              Cinq voix de la M&eacute;diterran&eacute;e.
            </h2>
            <ul className="mt-10 space-y-5 text-sm">
              {[
                ["Olivier", "Olea europaea"],
                ["Romarin", "Rosmarinus officinalis"],
                ["Fleur d'oranger", "Citrus aurantium"],
                ["Jasmin", "Jasminum grandiflorum"],
                ["Laurier", "Laurus nobilis"],
              ].map(([fr, lat]) => (
                <li key={fr} className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="font-serif text-xl text-primary">{fr}</span>
                  <span className="italic text-muted-foreground">{lat}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <img src={botanical} alt="Plantes méditerranéennes" loading="lazy" className="w-full h-auto" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-7">
          <img src={methodCraft} alt="Fabrication à froid" loading="lazy" className="w-full h-auto" />
        </Reveal>
        <Reveal delay={150} className="md:col-span-4 md:col-start-9">
          <p className="eyebrow">M&eacute;thode &agrave; froid</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-primary leading-tight">
            Le temps lent de la saponification.
          </h2>
          <p className="mt-6 text-base/relaxed text-foreground/80">
            Chaque pain est vers&eacute; &agrave; la main, puis laiss&eacute; m&ucirc;rir six semaines.
            Une m&eacute;thode patiente qui pr&eacute;serve la glyc&eacute;rine, les actifs des plantes
            et la douceur du soin.
          </p>
          <Link to="/savoir-faire" className="mt-8 inline-block link-quiet text-xs tracking-[0.28em] uppercase text-primary">
            Notre savoir-faire
          </Link>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] py-32 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow !text-[color:var(--color-primary-foreground)]/60">Nos engagements</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-[color:var(--color-primary-foreground)] leading-tight">
              Une beaut&eacute; qui prend soin de la terre.
            </h2>
          </Reveal>
          <div className="mt-20 grid md:grid-cols-3 gap-14 text-left">
            {[
              { t: "Botanique biologique", d: "Huiles, eaux florales et plantes issues d'agriculture biologique certifiée, cultivées en Tunisie." },
              { t: "Geste pr&eacute;cis", d: "Une saponification à froid mesurée au gramme près, conduite avec la rigueur d'un laboratoire." },
              { t: "Emballages durables", d: "Papier recyclé, encres végétales, zéro plastique. Conçus pour être conservés." },
            ].map((e, i) => (
              <Reveal key={e.t} delay={i * 120}>
                <p className="font-serif text-2xl text-[color:var(--color-primary-foreground)]">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-xl text-[color:var(--color-primary-foreground)]">{e.t}</h3>
                <p className="mt-3 text-sm/relaxed opacity-80">{e.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow">Collection</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">Cinq pains, cinq paysages.</h2>
          </div>
          <Link to="/collection" className="hidden md:inline-block link-quiet text-xs tracking-[0.28em] uppercase text-primary">
            Tout voir
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
