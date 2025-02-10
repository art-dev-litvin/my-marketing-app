import { Product } from "@app/types/product";
import React from "react";
import ProductImage from "@app/components/ProductImage";
import Button from "@app/components/Button";
import Price from "../Price";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col items-start rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full relative mb-3">
        <ProductImage
          wrapperClassname="w-full h-[300px] lg:h-[420px]"
          statusClassname="text-xl"
          src={product.imageSrc}
          alt={product.name}
          productStatus={product.status}
        />
      </div>
      <div className="grow">
        <h2 className="text-2xl font-semibold text-white mb-2">{product.name}</h2>
        <p className="text-gray-300 mb-4">{product.description}</p>
      </div>
      <Price product={product} className="text-xl" />
      <Button href={`/products/${product.id}`}>view details</Button>
    </div>
  );
}
