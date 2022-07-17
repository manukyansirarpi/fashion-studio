import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { fetchItemsData } from "./itemsApi";
import { RootState } from "./store";

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number
}

export interface ItemsState {
  items: Item[],
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ItemsState = {
  items: [],
  status: 'idle',
};

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
      .addCase(fetchItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        for (const key in action.payload) {
          const { name, description, price} = action.payload[key];
          state.items.push({'id': key, name, description, price});
        }
      })
      .addCase(fetchItemsAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(AddItemsAsync.pending, (state) => {

      })
      .addCase(AddItemsAsync.fulfilled, (state, action) => {

      })
      .addCase(AddItemsAsync.rejected, (state) => {

      });
  },
});


export const items = (state: RootState) => state.items;
export default itemsSlice.reducer;