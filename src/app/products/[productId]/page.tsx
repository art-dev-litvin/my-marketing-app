import ProductDetails from "@app/components/ProductDetails";
import Link from "next/link";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const productId = Number((await params).productId);

  if (isNaN(productId)) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="text-3xl mb-3">Product not found!</p>
        <Link className="hover:underline" href="/products">
          Go to products list
        </Link>
      </div>
    );
  }

  return <ProductDetails productId={productId} />;
}
