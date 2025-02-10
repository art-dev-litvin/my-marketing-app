import { Product } from "@app/types/product";
import { products } from "@app/data/products";

export const fetchProducts = (): Promise<Product[]> => {
  const delay = 2000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!products || products.length === 0) {
        reject(new Error("Failed to fetch products. No products available."));
      } else {
        resolve(products);
      }
    }, delay);
  });
};
