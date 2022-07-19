import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { fetchItemsData } from "./itemsApi";
import { RootState } from "../store";

export interface ItemI {
  id: string;
  name: string;
  description: string;
  price: number
  img?: string
}

export interface ItemsState {
  data: ItemI[],
  status: 'idle' | 'loading' | 'failed';
}

const initialState = {
  data: [],
  status: 'idle',
} as ItemsState;

export const fetchItemsAsync = createAsyncThunk('items/getItems', async () => {
  return await fetchItemsData();
});

export const AddItemsAsync = createAsyncThunk('items/addItem', async () => {
  return await fetchItemsData();
});


export const itemsSlice = createSlice({
	name: 'items',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        for (const key in action.payload) {
          const { name, description, price, img} = action.payload[key];
          state.data.push({'id': key, name, description, price, img});
        }
      })
      .addCase(fetchItemsAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(AddItemsAsync.pending, (state, action) => {

      })
      .addCase(AddItemsAsync.fulfilled, (state, action) => {

      })
      .addCase(AddItemsAsync.rejected, (state, action) => {

      });
  },
});


export const items = (state: RootState) => state.items;
export default itemsSlice.reducer;
