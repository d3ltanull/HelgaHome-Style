export type CategoryId = "toys" | "bags" | "sets" | "baskets";

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  prefix: string;
  imageCount: number;
  extension: "jpg" | "jpeg";
}

export const categories: Category[] = [
  {
    id: "toys",
    title: "Игрушки",
    subtitle: "Уютные handmade спутники, в каждой петле — тепло и забота",
    prefix: "toy",
    imageCount: 12,
    extension: "jpeg",
  },
  {
    id: "bags",
    title: "Сумки",
    subtitle: "Изящные аксессуары, созданные с вниманием к каждой детали",
    prefix: "bag",
    imageCount: 9,
    extension: "jpeg",
  },
  {
    id: "sets",
    title: "Сервировочные наборы",
    subtitle: "Изящная сервировка для тёплых застолий и особых моментов",
    prefix: "set",
    imageCount: 7,
    extension: "jpeg",
  },
  {
    id: "baskets",
    title: "Корзинки",
    subtitle: "Аккуратное хранение с неповторимым домашним шармом",
    prefix: "basket",
    imageCount: 8,
    extension: "jpeg",
  },
];

export function getCategoryImagePath(
  category: Category,
  index: number,
  extension: Category["extension"] = category.extension,
): string {
  return `/images/${category.prefix}_${index}.${extension}`;
}

export function getCategoryImages(category: Category): string[] {
  return Array.from({ length: category.imageCount }, (_, i) =>
    getCategoryImagePath(category, i + 1),
  );
}

export function getAlternateImagePath(src: string): string | null {
  if (src.endsWith(".jpeg")) {
    return src.replace(/\.jpeg$/, ".jpg");
  }
  if (src.endsWith(".jpg")) {
    return src.replace(/\.jpg$/, ".jpeg");
  }
  return null;
}
