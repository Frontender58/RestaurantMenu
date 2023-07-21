import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../products';


const initialState = {
  products: products,
  basketProducts: [],
  countProducts: 0,
  totalCost: 0,
  product: null
}

let isProductAdd = false

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsBasket: (state, payload) => {
      state.basketProducts.push(payload.payload)
      state.countProducts = state.basketProducts.length
      state.totalCost = state.basketProducts.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    addProductBasket: (state, payload) => {
      if (!isProductAdd) {
        state.basketProducts.push(payload.payload)
        state.countProducts = state.basketProducts.length
        state.totalCost = state.basketProducts.reduce((acc, current) => {
          return acc + current.price
        }, 0)
        isProductAdd = true
      }
    },
    removeProductsBasket: (state, payload) => {
      state.basketProducts = state.basketProducts.filter((item) => {
        return item.idx !== payload.payload
      })
      state.countProducts = state.basketProducts.length
      state.totalCost = state.basketProducts.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    cleanProductsBasket: (state) => {
      state.basketProducts = []
      state.countProducts = 0
      state.totalCost = 0
    }
  }
})

export const { addProductsBasket, removeProductsBasket, addProductBasket, cleanProductsBasket } = productsSlice.actions
export default productsSlice.reducer