import { createFileRoute, Link } from "@tanstack/react-router";
import olive from "@/assets/journal-olive.jpg";
import rosemary from "@/assets/journal-rosemary.jpg";
import jasmine from "@/assets/journal-jasmine.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/journal")({
  component: Journal,
});

const articles = [
  {
    img: olive,
    cat: "Olivier",
    title: "Les bienfaits de l'huile d'olive tunisienne",
    excerpt:
      "Riche en polyphénols et en vitamine E, l'huile d'olive du Sahel nourrit la peau depuis l'Antiquité. Une lecture sensorielle d'un trésor lent.",
    read: "5 min",
  },
  {
    img: rosemary,
    cat: "Romarin",
    title: "Le romarin dans les traditions méditerranéennes",
    excerpt:
      "Des hammams aux jardins de monastères, le romarin tisse une histoire de purification et de mémoire. Comment l'intégrer au rituel du matin.",
    read: "6 min",
  },
  {
    img: jasmine,
    cat: "Jasmin",
    title: "Le jasmin et l'art du parfum tunisien",
    excerpt:
      "Le machmoum, ce petit bouquet offert le soir, dit tout d'une certaine douceur tunisienne. Voyage dans l'absolue de jasmin de Tunis.",
    read: "7 min",
  },
];

function Journal() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <p className="eyebrow animate-fade">Journal botanique</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-primary leading-[1.02] animate-rise">
          Notes <em className="italic font-light">m&eacute;diterran&eacute;ennes.</em>
        </h1>
      </section>

      <section className="px-6 md:px-12 max-w-[1300px] mx-auto pb-32 grid md:grid-cols-3 gap-10 md:gap-8">
        {articles.map((a, i) => (
          <Reveal key={a.title} delay={i * 120}>
            <article className="group">
              <Link to="/journal" className="block aspect-[4/5] overflow-hidden bg-[color:var(--color-secondary)]">
                <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" />
              </Link>
              <div className="pt-6">
                <p className="eyebrow">{a.cat} &middot; {a.read}</p>
                <h2 className="mt-4 font-serif text-2xl md:text-3xl text-primary leading-snug">{a.title}</h2>
                <p className="mt-4 text-sm/relaxed text-foreground/80">{a.excerpt}</p>
                <span className="mt-5 inline-block link-quiet text-xs tracking-[0.28em] uppercase text-primary">
                  Lire l&rsquo;article
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
