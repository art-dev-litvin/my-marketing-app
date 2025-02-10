import ProductList from "@app/components/ProductList";
import SearchProductForm from "@app/components/SearchProductForm";
import React from "react";

export default function ProductsPage() {
  return (
    <div className="container mx-auto pt-12 pb-7">
      <h1 className="text-4xl font-bold text-white mb-16 text-center">Our Products</h1>
      <SearchProductForm />
      <ProductList />
    </div>
  );
}
