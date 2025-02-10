"use client";
import { useAppSelector } from "@app/hooks/redux";
import ProductItem from "@app/components/ProductItem";
import { selectProducts } from "@app/store/slices/products";
import { useFetchProducts } from "@app/hooks/useFetchProducts";

const ProductList = () => {
  useFetchProducts();

  const { items, loading, error } = useAppSelector(selectProducts);

  if (loading) {
    return <div className="text-white">Loading products...</div>;
  }
  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
      {items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
