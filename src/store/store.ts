import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemsReducer from "./items/itemsSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
