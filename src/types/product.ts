import { ProductCategory, ProductStatus, UnitType } from "./productFields";

export interface Product {
  id: number;
  name: string;
  description: string;
  ingredients?: string[];
  price: number;
  discountPrice?: number;
  status: ProductStatus;
  unitType: UnitType;
  category: ProductCategory;
}

export type ProductList = Product[];
