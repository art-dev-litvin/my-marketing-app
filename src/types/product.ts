import { ProductStatus, UnitEnum } from "./productFields";

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
  category: string;
}

export type ProductList = Product[];
