import { Route as rootRouteImport } from "./routes/__root";
import { Route as SavoirFaireRouteImport } from "./routes/savoir-faire";
import { Route as JournalRouteImport } from "./routes/journal";
import { Route as HistoireRouteImport } from "./routes/histoire";
import { Route as CollectionRouteImport } from "./routes/collection";
import { Route as BoutiqueRouteImport } from "./routes/boutique";
import { Route as IndexRouteImport } from "./routes/index";

const SavoirFaireRoute = SavoirFaireRouteImport.update({
  id: "/savoir-faire",
  path: "/savoir-faire",
  getParentRoute: () => rootRouteImport,
} as any);
const JournalRoute = JournalRouteImport.update({
  id: "/journal",
  path: "/journal",
  getParentRoute: () => rootRouteImport,
} as any);
const HistoireRoute = HistoireRouteImport.update({
  id: "/histoire",
  path: "/histoire",
  getParentRoute: () => rootRouteImport,
} as any);
const CollectionRoute = CollectionRouteImport.update({
  id: "/collection",
  path: "/collection",
  getParentRoute: () => rootRouteImport,
} as any);
const BoutiqueRoute = BoutiqueRouteImport.update({
  id: "/boutique",
  path: "/boutique",
  getParentRoute: () => rootRouteImport,
} as any);
const IndexRoute = IndexRouteImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRouteImport,
} as any);

export const routeTree = rootRouteImport._addFileChildren([
  IndexRoute,
  BoutiqueRoute,
  CollectionRoute,
  HistoireRoute,
  JournalRoute,
  SavoirFaireRoute,
]);
