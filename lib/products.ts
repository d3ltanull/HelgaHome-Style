import { categories, getCategoryImagePath, type CategoryId } from "@/lib/categories";

export interface Product {
  id: string;
  categoryId: CategoryId;
  image: string;
  title: string;
  description: string;
  dimensions: string;
}

// Edit titles, descriptions, dimensions, and image paths here.
export const products: Product[] = categories.flatMap((category) =>
  Array.from({ length: category.imageCount }, (_, index) => ({
    id: `${category.prefix}_${index + 1}`,
    categoryId: category.id,
    image: getCategoryImagePath(category, index + 1),
    title: "Название изделия",
    description:
      "Краткое описание материала, дизайна и ключевых особенностей изделия...",
    dimensions: "Размеры: 00 × 00 см",
  })),
);

export function getCategoryProducts(categoryId: CategoryId): Product[] {
  return products.filter((product) => product.categoryId === categoryId);
}
