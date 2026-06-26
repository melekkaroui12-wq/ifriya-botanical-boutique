import { Link } from "@tanstack/react-router";
import logo from "@/assets/ifriya-logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20">
        <div className="grid gap-14 md:grid-cols-4">
          <div>
            <img src={logo} alt="IFRIYA" className="h-16 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-sm/relaxed opacity-80 max-w-xs">
              Maison de savons botaniques tunisiens, fabriqués à froid avec les plantes de la Méditerranée.
            </p>
          </div>
          <div>
            <h4 className="eyebrow !text-[color:var(--color-primary-foreground)]/70 mb-5">Maison</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><Link to="/histoire" className="link-quiet">Notre histoire</Link></li>
              <li><Link to="/savoir-faire" className="link-quiet">Savoir-faire</Link></li>
              <li><Link to="/journal" className="link-quiet">Journal botanique</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-[color:var(--color-primary-foreground)]/70 mb-5">Boutique</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><Link to="/collection" className="link-quiet">Collection</Link></li>
              <li><Link to="/boutique" className="link-quiet">Panier</Link></li>
              <li><span className="opacity-70">Livraison & retours</span></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-[color:var(--color-primary-foreground)]/70 mb-5">Lettre</h4>
            <p className="text-sm opacity-80 mb-4">Recevez nos saisons botaniques.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b border-[color:var(--color-primary-foreground)]/30">
              <input
                type="email"
                placeholder="Votre adresse"
                className="bg-transparent flex-1 py-2 text-sm outline-none placeholder:opacity-50"
              />
              <button className="text-xs tracking-[0.28em] uppercase opacity-90 hover:opacity-100">→</button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[color:var(--color-primary-foreground)]/15 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-70">
          <p>&copy; {new Date().getFullYear()} Ifriya — Tunis, Tunisie.</p>
          <p>Fabriqué à froid, à la main.</p>
        </div>
      </div>
    </footer>
  );
}
