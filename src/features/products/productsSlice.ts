import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../app/api'

export interface ProductsState {
  products: { [id:string]: Product}
}

const initialState: ProductsState = {
  products: {
    "123": {
      id: "1",
      name: "fake product",
      price: 1790,
      description: "fake product description",
      imageURL: "s",
      imageAlt: "s",
      imageCredit: "s"
    }
  }
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    recievedProducts(state, action:PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach(product => {
        state.products[product.id] = product;
      })
    }
  }
});

export const { recievedProducts } = productsSlice.actions;
export default productsSlice.reducer;