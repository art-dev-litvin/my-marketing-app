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
    <div className="container mx-auto pt-12">
      <Button href="/products" className="mb-4">
        Go to products list
      </Button>
      <div className=" flex gap-10 text-white">
        <ProductImage
          wrapperClassname="w-[500px] h-[700px]"
          statusClassname="text-3xl"
          src={product.imageSrc}
          alt={product.name}
          productStatus={product.status}
        />
        <div className="grow flex flex-col text-lg relative">
          <div className="grow">
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
          </div>

          <div className="flex">
            <Button className="mt-3" href={`/products/${product.id}/edit`}>
              Edit Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
