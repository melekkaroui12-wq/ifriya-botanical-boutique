import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import logo from "@/assets/ifriya-logo.png";

const nav = [
  { to: "/collection", label: "Collection" },
  { to: "/histoire", label: "Histoire" },
  { to: "/savoir-faire", label: "Savoir-faire" },
  { to: "/journal", label: "Journal" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-foreground text-xs tracking-[0.28em] uppercase"
        >
          Menu
        </button>

        <nav className="hidden md:flex items-center gap-10 text-[0.72rem] tracking-[0.28em] uppercase text-foreground/80">
          {nav.slice(0, 2).map((n) => (
            <Link key={n.to} to={n.to} className="link-quiet hover:text-foreground transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/" aria-label="IFRIYA — Accueil" className="flex items-center">
          <img src={logo} alt="IFRIYA" className="h-12 md:h-14 w-auto" />
        </Link>

        <div className="flex items-center gap-8 text-[0.72rem] tracking-[0.28em] uppercase text-foreground/80">
          <nav className="hidden md:flex items-center gap-10">
            {nav.slice(2).map((n) => (
              <Link key={n.to} to={n.to} className="link-quiet hover:text-foreground transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
          <button onClick={() => setOpen(true)} className="link-quiet relative">
            Panier{count > 0 && <span className="ml-2 tabular-nums">({count})</span>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background animate-fade md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="wordmark text-lg">IFRIYA</span>
            <button onClick={() => setMenuOpen(false)} className="text-xs tracking-[0.28em] uppercase">
              Fermer
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-16 text-2xl font-serif">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setMenuOpen(false)} className="text-primary">
                {n.label}
              </Link>
            ))}
            <Link to="/boutique" onClick={() => setMenuOpen(false)} className="text-primary">
              Boutique
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
