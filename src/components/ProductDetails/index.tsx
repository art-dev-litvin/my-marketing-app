"use client";

import { useAppSelector } from "@app/hooks/redux";
import { useFetchProducts } from "@app/hooks/useFetchProducts";
import { selectProduct } from "@app/store/slices/products";
import React from "react";
import ProductImage from "@app/components/ProductImage";
import Button from "@app/components/Button";
import Price from "../Price";

interface ProductDetailsProps {
  productId: number;
}

export default function ProductDetails({ productId }: ProductDetailsProps) {
  useFetchProducts();

  const product = useAppSelector(selectProduct(productId));

  if (!product) return;

  return (
    <div className="container mx-auto  flex gap-10 pt-12 text-white">
      <ProductImage
        className="basis-[500px] h-[700px]"
        src={product.imageSrc}
        alt={product.name}
        productStatus={product.status}
      />
      <div className="grow text-lg relative">
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
        <Price className="text-2xl" unitClassName="text-base" product={product} />
        <p className="mb-2">{product.description}</p>
        <p className="text-white mb-2">
          <span className="font-bold">Category:</span> {product.category}
        </p>

        {product.ingredients && (
          <>
            <p className="mt-4">Ingredients:</p>
            <ul className="list-disc list-inside">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}

        <Button className="mt-3" href={`/products/${product.id}/edit`}>
          Edit Product
        </Button>
      </div>
    </div>
  );
}
