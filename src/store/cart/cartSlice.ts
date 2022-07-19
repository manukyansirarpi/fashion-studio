import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCartData} from "./cartApi";
import {RootState} from "../store";

export interface cartI {
  id: string,
  number: number
}

interface cartState {
  status: 'idle' | 'loading' | 'failed';
  data: cartI[];
}

const initialState = {
  status: 'idle',
  data: []
} as cartState;


export const fetchCartAsynch = createAsyncThunk("cart/fetchCart", async () => {
  return await fetchCartData();
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartAction(state, action: PayloadAction<string>) {
      let exists = false;
       state.data.map(d => {
          if ( d.id === action.payload) {
            exists = true;
            d.number++
          }
       });
        if (!exists) {
          state.data.push({id: action.payload, number: 1});
        }
    },
    removeFromCartAction(state, action: PayloadAction<string>) {
      debugger;
      state.data.map( (d, i) => {
        if ( d.id === action.payload) {
          if(d.number > 1) d.number--;
          else state.data.splice(i, 1);
        }
      });
    }
  },
  extraReducers: (builder) => {

    builder.addCase(fetchCartAsynch.fulfilled, (state, action) => {
      state.status = 'idle';
      for (const key in action.payload) {
        const { number } = action.payload[key];
        state.data.push({'id': key, number});
      }
    })
  }
});

export const cart = (state: RootState) => state.cart;
export const { addToCartAction, removeFromCartAction } = cartSlice.actions;
export default cartSlice.reducer;
