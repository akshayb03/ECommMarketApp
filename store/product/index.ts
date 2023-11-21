import {createSlice} from '@reduxjs/toolkit';

interface Product {
  wishList: Array<null>;
  cart: Array<null>;
}

const initialState: Product = {
  wishList: [],
  cart: [],
};

const slice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    addToWishList: (state, {payload}) => {
      state.wishList.push(payload);
    },
    deleteFromWishList: (state, {payload}) => {
      const deletedArray = state.wishList.filter(item => item.id !== payload);
      state.wishList = deletedArray;
    },
    addToCart: (state, {payload}) => {
      state.cart.push(payload);
    },
    deleteFromCart: (state, {payload}) => {
      console.log('payload', payload);
      const deletedArray = state.cart.filter(item => item.id !== payload);
      console.log('deletedArray', deletedArray);
      state.cart = deletedArray;
    },
    emptyCart: state => {
      state.cart = [];
    },
  },
});

export const {
  addToWishList,
  addToCart,
  deleteFromWishList,
  deleteFromCart,
  emptyCart,
} = slice.actions;

export default slice.reducer;
