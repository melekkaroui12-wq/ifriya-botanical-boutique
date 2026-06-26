import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

import { CartProvider } from "../lib/cart";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { CartDrawer } from "../components/site/CartDrawer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-serif text-4xl text-primary">Page introuvable</h1>
        <p className="mt-4 text-sm text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <div className="mt-8">
          <Link to="/" className="btn-quiet btn-quiet-hover">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <CartProvider>
      <Header />
      <main className="relative z-[2]">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
