import { createFileRoute, Link } from "@tanstack/react-router";
import storyOlives from "@/assets/story-olives.jpg";
import botanical from "@/assets/botanical-flatlay.jpg";
import methodCraft from "@/assets/method-craft.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/histoire")({
  component: Histoire,
});

function Histoire() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <p className="eyebrow animate-fade">Notre histoire</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-primary leading-[1.02] animate-rise">
          Une maison enracin&eacute;e<br />dans les <em className="italic font-light">terres anciennes.</em>
        </h1>
      </section>

      <section className="px-6 md:px-12 max-w-[1100px] mx-auto">
        <Reveal>
          <img src={storyOlives} alt="Oliveraie tunisienne" loading="lazy" className="w-full h-auto" />
        </Reveal>
      </section>

      <section className="px-6 md:px-12 py-32 max-w-[820px] mx-auto space-y-20 text-foreground/85 text-lg/relaxed">
        <Reveal>
          <p className="eyebrow mb-5">Ifriya</p>
          <p>
            Ifriya &mdash; nom antique donn&eacute; par les Romains &agrave; cette part d&rsquo;Afrique du Nord
            qui deviendra plus tard l&rsquo;Ifriqiya &mdash; d&eacute;signe pour nous une g&eacute;ographie
            intime : celle d&rsquo;une enfance pass&eacute;e entre les oliveraies du Sahel et
            les jardins d&rsquo;agrumes de Nabeul. La maison Ifriya est n&eacute;e de l&rsquo;envie
            de traduire ce paysage en gestes de soin.
          </p>
        </Reveal>

        <Reveal>
          <p className="eyebrow mb-5">Les oliveraies</p>
          <p>
            La Tunisie compte des oliviers mill&eacute;naires qui survivent aux empires.
            Nos huiles proviennent de petits producteurs du Sahel, en culture
            biologique, premi&egrave;re pression &agrave; froid. La couleur, la densit&eacute;, le
            parfum vert : tout vient de cette terre lente.
          </p>
        </Reveal>

        <Reveal>
          <img src={botanical} alt="Plantes méditerranéennes" loading="lazy" className="w-full h-auto my-12" />
        </Reveal>

        <Reveal>
          <p className="eyebrow mb-5">Les jardins</p>
          <p>
            Au printemps, Nabeul exhale la fleur d&rsquo;oranger ; en &eacute;t&eacute;, Tunis
            le jasmin. Le romarin et le laurier veillent toute l&rsquo;ann&eacute;e sur les
            collines. Nos ingr&eacute;dients suivent ce calendrier v&eacute;g&eacute;tal, distill&eacute;s
            au plus pr&egrave;s des cueillettes.
          </p>
        </Reveal>

        <Reveal>
          <img src={methodCraft} alt="Atelier" loading="lazy" className="w-full h-auto my-12" />
        </Reveal>

        <Reveal>
          <p className="eyebrow mb-5">La transmission</p>
          <p>
            La saponification &agrave; froid est un savoir qui se transmet &agrave; l&rsquo;atelier,
            geste apr&egrave;s geste. Chaque pain Ifriya porte la trace d&rsquo;une main,
            d&rsquo;un temps long, d&rsquo;une d&eacute;cision : celle de ne jamais acc&eacute;l&eacute;rer ce
            que la nature a d&eacute;j&agrave; parfaitement r&eacute;gl&eacute;.
          </p>
        </Reveal>

        <Reveal>
          <div className="text-center pt-10">
            <Link to="/collection" className="btn-quiet btn-quiet-hover">Voir la collection</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
