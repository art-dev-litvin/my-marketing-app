import ProductDetails from "@app/components/ProductDetails";
import { notFound } from "next/navigation";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const productId = Number((await params).productId);

  if (isNaN(productId)) return notFound();

  return <ProductDetails productId={productId} />;
}
