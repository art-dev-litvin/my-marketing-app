import { useEffect } from "react";
import { fetchProducts } from "@app/services/fetchProducts";
import { useAppDispatch } from "@app/hooks/redux";
import { setError, setLoading, setProducts } from "@app/store/slices/products";

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();

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

    getProducts();
  }, [dispatch]);
};
