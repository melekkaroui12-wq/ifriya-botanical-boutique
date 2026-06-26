import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group flex flex-col">
      <Link to="/collection" className="block overflow-hidden bg-[color:var(--color-secondary)] aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="pt-6 flex flex-col gap-1">
        <p className="eyebrow">{product.latin}</p>
        <div className="flex items-baseline justify-between mt-1">
          <h3 className="font-serif text-2xl text-primary">{product.name}</h3>
          <span className="tabular-nums text-sm text-foreground/80">{product.price} €</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
        <button
          onClick={() => add(product.id)}
          className="mt-5 self-start text-[0.7rem] tracking-[0.28em] uppercase link-quiet text-primary"
        >
          Ajouter — {product.price} €
        </button>
      </div>
    </article>
  );
}
