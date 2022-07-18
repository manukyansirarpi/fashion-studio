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
  reducers: {},
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

export const data = (state: RootState) => state.cart;
export default cartSlice.reducer