import { useEffect } from "react";
import { fetchProducts } from "@app/services/fetchProducts";
import { useAppDispatch, useAppSelector } from "@app/hooks/redux";
import { selectProducts, setError, setLoading, setProducts } from "@app/store/slices/products";

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectProducts);

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch (err) {
        dispatch(setError((err as Error).message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (items.length === 0) {
      getProducts();
    }
  }, [dispatch, items]);
};
