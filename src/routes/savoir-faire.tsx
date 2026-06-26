import { createFileRoute, Link } from "@tanstack/react-router";
import methodCraft from "@/assets/method-craft.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/savoir-faire")({
  component: SavoirFaire,
});

const steps = [
  {
    n: "01",
    t: "S&eacute;lection des huiles",
    d: "Huile d'olive vierge bio du Sahel, beurre de karit&eacute;, huile d'amande douce. Toutes press&eacute;es &agrave; froid, certifi&eacute;es biologiques.",
  },
  {
    n: "02",
    t: "Saponification &agrave; froid",
    d: "&Agrave; temp&eacute;rature ambiante, les huiles rencontrent la soude. La r&eacute;action lente pr&eacute;serve la glyc&eacute;rine naturelle, hydratante par essence.",
  },
  {
    n: "03",
    t: "Infusion botanique",
    d: "Plantes fra&icirc;ches ou s&eacute;ch&eacute;es, huiles essentielles, eaux florales : chaque pain re&ccedil;oit son &acirc;me v&eacute;g&eacute;tale au moment exact du trace.",
  },
  {
    n: "04",
    t: "Maturation lente",
    d: "Six semaines de cure dans l'atelier. Le pain durcit, perd son eau, s'adoucit. Rien ne presse &mdash; c'est le temps qui fait le savon.",
  },
  {
    n: "05",
    t: "Estampage &agrave; la main",
    d: "Chaque pain est d&eacute;moul&eacute;, taill&eacute; et estamp&eacute; du sceau Ifriya. Un dernier geste, simple, qui signe l'objet.",
  },
];

function SavoirFaire() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <p className="eyebrow animate-fade">Le savoir-faire</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-primary leading-[1.02] animate-rise">
          Le temps lent<br /><em className="italic font-light">du savon vrai.</em>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-base/relaxed text-foreground/80 animate-rise" style={{ animationDelay: "150ms" }}>
          La saponification &agrave; froid est une m&eacute;thode patiente, qui respecte les huiles,
          les plantes et la peau.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <Reveal>
          <img src={methodCraft} alt="Fabrication artisanale" loading="lazy" className="w-full h-auto" />
        </Reveal>
      </section>

      <section className="px-6 md:px-12 py-32 max-w-[900px] mx-auto">
        <ol className="space-y-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className="grid grid-cols-[auto_1fr] gap-8 md:gap-14 border-b border-border pb-16 last:border-0">
                <span className="font-serif text-4xl md:text-5xl text-terracotta tabular-nums">{s.n}</span>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">{s.t}</h2>
                  <p className="mt-5 text-base/relaxed text-foreground/80 max-w-xl">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-[color:var(--color-secondary)] px-6 md:px-12 py-28 text-center">
        <Reveal>
          <p className="font-serif italic text-3xl md:text-4xl text-primary max-w-3xl mx-auto leading-snug">
            &laquo; Un savon vrai n&rsquo;a pas besoin de promesses. Il a besoin de temps. &raquo;
          </p>
          <p className="mt-8 eyebrow">&mdash; L&rsquo;atelier Ifriya</p>
          <div className="mt-12">
            <Link to="/collection" className="btn-quiet btn-quiet-hover">D&eacute;couvrir la collection</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
