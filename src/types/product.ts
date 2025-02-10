import { ProductCategory, ProductStatus, UnitEnum } from "./productFields";

export interface Product {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
  ingredients?: string[];
  price: number;
  discountPrice?: number;
  status: ProductStatus;
  unitType: UnitEnum;
  category: ProductCategory;
}

export type ProductList = Product[];
