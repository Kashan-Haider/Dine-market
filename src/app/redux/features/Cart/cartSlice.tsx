import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  quantity : number;
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingItem = state.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        existingItem.quantity += itemToAdd.quantity;
      } else {
        state.push({ ...itemToAdd});
      }
      state = Array.from(state)
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemIndex = state.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
