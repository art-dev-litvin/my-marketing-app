import { Product } from "@app/types/product";
import React from "react";

export interface PriceProps {
  product: Product;
  className?: string;
  unitClassName?: string;
}

export default function Price({ product, className, unitClassName }: PriceProps) {
  return (
    <div className={`flex items-end gap-1 mb-4 ${className}`}>
      <span className="flex gap-2 font-bold text-white">
        {product.discountPrice ? (
          <span className="line-through text-gray-400">{product.price}$ </span>
        ) : (
          product.price + "$"
        )}
        {product.discountPrice && <span className="text-green-400">{product.discountPrice}$</span>}
      </span>
      /<span className={`text-sm text-gray-400 ${unitClassName}`}>{product.unitType}</span>
    </div>
  );
}
