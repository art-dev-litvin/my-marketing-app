import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "@app/types/product";

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export const selectProducts = (store: RootState) => store.products;
export const selectProduct = (productId: number) => (store: RootState) =>
  store.products.items.find((item) => item.id === productId);

export default productsSlice.reducer;
