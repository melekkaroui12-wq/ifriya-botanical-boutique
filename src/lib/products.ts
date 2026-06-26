import olea from "@/assets/product-olea.jpg";
import rayhana from "@/assets/product-rayhana.jpg";
import zahra from "@/assets/product-zahra.jpg";
import yasmine from "@/assets/product-yasmine.jpg";
import laurus from "@/assets/product-laurus.jpg";

export type Product = {
  id: string;
  name: string;
  latin: string;
  tagline: string;
  description: string;
  sensorial: string;
  ingredients: string[];
  benefits: string[];
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "olea",
    name: "Olea",
    latin: "Olea europaea",
    tagline: "Huile d'olive tunisienne",
    description:
      "Un savon nourrissant à la première pression d'oliviers centenaires du Sahel tunisien. Sa pâte ivoire et son parfum vert et doux évoquent un verger après la pluie.",
    sensorial: "Mousse onctueuse, parfum vert et oléagineux, toucher velouté.",
    ingredients: ["Huile d'olive vierge bio", "Eau de source", "Soude saponifiée", "Argile blanche"],
    benefits: ["Nourrit en profondeur", "Apaise les peaux sensibles", "Reminéralise"],
    price: 9,
    image: olea,
  },
  {
    id: "rayhana",
    name: "Rayhana",
    latin: "Rosmarinus officinalis",
    tagline: "Romarin sauvage",
    description:
      "Cueilli sur les collines de Kroumirie, le romarin infuse ce pain d'un vert herbacé tonifiant. À utiliser le matin, comme une promenade dans la garrigue.",
    sensorial: "Notes camphrées et résineuses, mousse fine, finale fraîche.",
    ingredients: ["Huile d'olive bio", "Infusion de romarin", "Huile essentielle de romarin", "Beurre de karité"],
    benefits: ["Tonifie l'épiderme", "Purifie", "Stimule la microcirculation"],
    price: 11,
    image: rayhana,
  },
  {
    id: "zahra",
    name: "Zahra",
    latin: "Citrus aurantium",
    tagline: "Fleur d'oranger",
    description:
      "Cueillies à Nabeul au petit matin, les fleurs d'oranger livrent leur eau précieuse à ce savon d'une douceur presque sucrée. Une caresse blanche.",
    sensorial: "Floral lumineux et miellé, mousse crémeuse, peau apaisée.",
    ingredients: ["Huile d'olive bio", "Eau de fleur d'oranger de Nabeul", "Huile d'amande douce", "Cire d'abeille"],
    benefits: ["Apaise", "Hydrate", "Parfume délicatement"],
    price: 12,
    image: zahra,
  },
  {
    id: "yasmine",
    name: "Yasmine",
    latin: "Jasminum grandiflorum",
    tagline: "Jasmin tunisien",
    description:
      "Le machmoum, bouquet emblématique de Tunis, devient ici un savon enveloppant. Un parfum profond, féminin, infiniment méditerranéen.",
    sensorial: "Floral blanc, opulent, persistant. Mousse soyeuse.",
    ingredients: ["Huile d'olive bio", "Absolue de jasmin", "Huile de sésame", "Argile rose"],
    benefits: ["Adoucit", "Parfume longuement", "Apporte de l'éclat"],
    price: 14,
    image: yasmine,
  },
  {
    id: "laurus",
    name: "Laurus",
    latin: "Laurus nobilis",
    tagline: "Laurier noble",
    description:
      "Le laurier, arbre des sages, donne à ce savon vert profond une force tranquille. Idéal pour le corps et les cheveux, dans la tradition des bains.",
    sensorial: "Boisé, herbacé, légèrement camphré. Mousse dense.",
    ingredients: ["Huile d'olive bio", "Huile de baies de laurier", "Argile verte", "Soude saponifiée"],
    benefits: ["Assainit", "Fortifie", "Convient au cuir chevelu"],
    price: 13,
    image: laurus,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
