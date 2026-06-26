import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, detailed, setQty, remove, subtotal, count } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-8 py-6 border-b border-border">
            <span className="eyebrow">Panier {count > 0 && `· ${count}`}</span>
            <button onClick={() => setOpen(false)} className="text-xs tracking-[0.28em] uppercase">
              Fermer
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-6">
            {detailed.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="font-serif text-2xl text-primary mb-2">Votre panier est vide</p>
                <p className="text-sm text-muted-foreground mb-8">Découvrez nos savons botaniques.</p>
                <Link to="/collection" onClick={() => setOpen(false)} className="btn-quiet btn-quiet-hover">
                  Voir la collection
                </Link>
              </div>
            ) : (
              <ul className="space-y-8">
                {detailed.map((i) => (
                  <li key={i.id} className="flex gap-5">
                    <img src={i.product.image} alt={i.product.name} className="h-24 w-20 object-cover rounded-sm" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-serif text-lg text-primary leading-tight">{i.product.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{i.product.tagline}</p>
                        </div>
                        <p className="text-sm tabular-nums">{(i.product.price * i.qty).toFixed(0)} €</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-border rounded-full px-3 py-1">
                          <button onClick={() => setQty(i.id, i.qty - 1)} className="text-sm">&minus;</button>
                          <span className="text-sm tabular-nums w-5 text-center">{i.qty}</span>
                          <button onClick={() => setQty(i.id, i.qty + 1)} className="text-sm">+</button>
                        </div>
                        <button onClick={() => remove(i.id)} className="text-xs uppercase tracking-[0.2em] text-muted-foreground link-quiet">
                          Retirer
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {detailed.length > 0 && (
            <div className="border-t border-border px-8 py-6 space-y-5">
              <div className="flex justify-between text-sm">
                <span className="eyebrow">Sous-total</span>
                <span className="tabular-nums">{subtotal.toFixed(0)} €</span>
              </div>
              <p className="text-xs text-muted-foreground">Livraison offerte dès 60 €.</p>
              <Link to="/boutique" onClick={() => setOpen(false)} className="btn-solid w-full">
                Passer commande
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
