import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/boutique")({
  component: Boutique,
});

const reviews = [
  { name: "In&egrave;s B.", city: "Paris", text: "Un savon qui sent r&eacute;ellement le jardin tunisien. La mousse est si douce que ma peau ne tire plus.", rating: 5 },
  { name: "Hela K.", city: "Tunis", text: "Le pain Olea me rappelle l'huile de ma grand-m&egrave;re. Un objet &agrave; part, sobre et pr&eacute;cieux.", rating: 5 },
  { name: "Lucas D.", city: "Marseille", text: "L'emballage, le sceau, le parfum : tout est juste. On sent le travail d'une vraie maison.", rating: 5 },
];

function Boutique() {
  const { detailed, setQty, remove, subtotal, count, clear } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart");
  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 6.5;
  const total = subtotal + shipping;

  return (
    <>
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-[1100px] mx-auto text-center">
        <p className="eyebrow animate-fade">Boutique</p>
        <h1 className="mt-6 font-serif text-5xl md:text-6xl text-primary leading-[1.02] animate-rise">
          Votre <em className="italic font-light">commande.</em>
        </h1>
      </section>

      <section className="px-6 md:px-12 max-w-[1100px] mx-auto pb-20">
        <div className="flex justify-center gap-10 md:gap-16 mb-16 text-xs tracking-[0.28em] uppercase">
          {(["cart", "checkout", "done"] as const).map((s, i) => (
            <div key={s} className={`flex items-center gap-3 ${step === s ? "text-primary" : "text-muted-foreground"}`}>
              <span className="tabular-nums">0{i + 1}</span>
              <span>{s === "cart" ? "Panier" : s === "checkout" ? "Paiement" : "Confirmation"}</span>
            </div>
          ))}
        </div>

        {step === "cart" && (
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              {detailed.length === 0 ? (
                <div className="text-center py-20 border-y border-border">
                  <p className="font-serif text-3xl text-primary">Votre panier est vide.</p>
                  <p className="mt-3 text-sm text-muted-foreground">D&eacute;couvrez nos cinq savons botaniques.</p>
                  <Link to="/collection" className="mt-8 inline-block btn-quiet btn-quiet-hover">Voir la collection</Link>
                </div>
              ) : (
                <ul className="divide-y divide-border border-y border-border">
                  {detailed.map((i) => (
                    <li key={i.id} className="flex gap-6 py-8">
                      <img src={i.product.image} alt={i.product.name} className="h-32 w-28 object-cover" />
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="eyebrow">{i.product.latin}</p>
                            <h3 className="mt-1 font-serif text-2xl text-primary">{i.product.name}</h3>
                            <p className="text-sm text-muted-foreground">{i.product.tagline}</p>
                          </div>
                          <p className="font-serif text-xl text-primary tabular-nums">{(i.product.price * i.qty).toFixed(0)} &euro;</p>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-3 border border-border rounded-full px-4 py-1.5">
                            <button onClick={() => setQty(i.id, i.qty - 1)}>&minus;</button>
                            <span className="tabular-nums w-6 text-center">{i.qty}</span>
                            <button onClick={() => setQty(i.id, i.qty + 1)}>+</button>
                          </div>
                          <button onClick={() => remove(i.id)} className="link-quiet text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Retirer
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <aside className="md:col-span-1">
              <div className="bg-[color:var(--color-secondary)] p-8">
                <p className="eyebrow">R&eacute;capitulatif</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between"><dt>Sous-total ({count})</dt><dd className="tabular-nums">{subtotal.toFixed(2)} &euro;</dd></div>
                  <div className="flex justify-between"><dt>Livraison</dt><dd className="tabular-nums">{shipping === 0 ? "Offerte" : `${shipping.toFixed(2)} €`}</dd></div>
                </dl>
                <hr className="hairline my-5" />
                <div className="flex justify-between items-baseline">
                  <span className="eyebrow">Total</span>
                  <span className="font-serif text-2xl text-primary tabular-nums">{total.toFixed(2)} &euro;</span>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">Livraison offerte d&egrave;s 60 &euro; &middot; TVA incluse.</p>
                <button
                  disabled={detailed.length === 0}
                  onClick={() => setStep("checkout")}
                  className="btn-solid w-full mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Passer au paiement
                </button>
              </div>
            </aside>
          </div>
        )}

        {step === "checkout" && (
          <form
            onSubmit={(e) => { e.preventDefault(); setStep("done"); clear(); }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="md:col-span-2 space-y-12">
              <fieldset>
                <legend className="eyebrow mb-6">Livraison</legend>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    ["firstname", "Pr&eacute;nom"],
                    ["lastname", "Nom"],
                    ["email", "Email"],
                    ["phone", "T&eacute;l&eacute;phone"],
                  ].map(([id, label]) => (
                    <label key={id} className="block">
                      <span className="eyebrow !text-xs">{label}</span>
                      <input required type={id === "email" ? "email" : "text"} className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                    </label>
                  ))}
                  <label className="block md:col-span-2">
                    <span className="eyebrow !text-xs">Adresse</span>
                    <input required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                  </label>
                  <label className="block">
                    <span className="eyebrow !text-xs">Code postal</span>
                    <input required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                  </label>
                  <label className="block">
                    <span className="eyebrow !text-xs">Ville</span>
                    <input required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="eyebrow mb-6">Paiement</legend>
                <div className="grid md:grid-cols-2 gap-5">
                  <label className="block md:col-span-2">
                    <span className="eyebrow !text-xs">Num&eacute;ro de carte</span>
                    <input required placeholder="0000 0000 0000 0000" className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                  </label>
                  <label className="block">
                    <span className="eyebrow !text-xs">Expiration</span>
                    <input required placeholder="MM / AA" className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                  </label>
                  <label className="block">
                    <span className="eyebrow !text-xs">CVC</span>
                    <input required placeholder="123" className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
                  </label>
                </div>
              </fieldset>
            </div>

            <aside className="md:col-span-1">
              <div className="bg-[color:var(--color-secondary)] p-8 sticky top-28">
                <p className="eyebrow">Votre commande</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {detailed.map((i) => (
                    <li key={i.id} className="flex justify-between gap-4">
                      <span className="text-foreground/80">{i.product.name} &times; {i.qty}</span>
                      <span className="tabular-nums">{(i.product.price * i.qty).toFixed(0)} &euro;</span>
                    </li>
                  ))}
                </ul>
                <hr className="hairline my-5" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Livraison</span><span className="tabular-nums">{shipping === 0 ? "Offerte" : `${shipping.toFixed(2)} €`}</span></div>
                  <div className="flex justify-between items-baseline mt-3">
                    <span className="eyebrow">Total</span>
                    <span className="font-serif text-2xl text-primary tabular-nums">{total.toFixed(2)} &euro;</span>
                  </div>
                </div>
                <button type="submit" className="btn-solid w-full mt-6">Confirmer la commande</button>
                <button type="button" onClick={() => setStep("cart")} className="block w-full mt-4 text-xs tracking-[0.28em] uppercase text-muted-foreground link-quiet">
                  Retour au panier
                </button>
              </div>
            </aside>
          </form>
        )}

        {step === "done" && (
          <div className="text-center py-20 max-w-xl mx-auto">
            <p className="eyebrow">Merci</p>
            <h2 className="mt-6 font-serif text-5xl text-primary leading-tight">Votre commande est confirm&eacute;e.</h2>
            <p className="mt-6 text-base/relaxed text-foreground/80">
              Un email r&eacute;capitulatif vous a &eacute;t&eacute; envoy&eacute;. Vos savons quittent l&rsquo;atelier sous 48h,
              soigneusement emball&eacute;s dans du papier recycl&eacute;.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link to="/collection" className="btn-quiet btn-quiet-hover">Voir la collection</Link>
              <Link to="/" className="btn-solid">Retour &agrave; l&rsquo;accueil</Link>
            </div>
          </div>
        )}
      </section>

      <section className="bg-[color:var(--color-secondary)] py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-center">Avis</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary text-center">
              Les mots de nos client&middot;es.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <figure className="bg-background p-10 h-full">
                  <div className="text-terracotta tracking-[0.4em] text-sm">{"★".repeat(r.rating)}</div>
                  <blockquote className="mt-6 font-serif italic text-lg/relaxed text-primary">
                    &laquo; {r.text} &raquo;
                  </blockquote>
                  <figcaption className="mt-6 eyebrow">&mdash; {r.name}, {r.city}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
