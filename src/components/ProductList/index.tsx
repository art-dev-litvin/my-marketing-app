"use client";
import { useAppSelector } from "@app/hooks/redux";
import ProductItem from "@app/components/ProductItem";
import { selectProducts } from "@app/store/slices/products";
import { useFetchProducts } from "@app/hooks/useFetchProducts";
import { useSearchParams } from "next/navigation";
import EmptyList from "./EmptyList";
import LoadingSpinner from "../LoadingSpinner";

const ProductList = () => {
  const searchParams = useSearchParams();
  useFetchProducts();

  const { items, loading, error } = useAppSelector(selectProducts);

  const searchByName = searchParams.get("searchByName")?.toLowerCase() || "";

  const filteredItems = items.filter((product) => product.name.toLowerCase().includes(searchByName));

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div className="text-white">{error}</div>;
  }

  if (filteredItems.length === 0) return <EmptyList />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
      {filteredItems.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
