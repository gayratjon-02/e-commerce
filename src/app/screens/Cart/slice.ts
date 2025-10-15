import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";
import { Order } from "../../../lib/types/order";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action: PayloadAction<Order[]>) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action: PayloadAction<Order[]>) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action: PayloadAction<Order[]>) => {
      state.finishedOrders = action.payload;
    },

    // ❌ rasm ustidagi X bosilganda bitta itemni barcha pausedOrders ichidan olib tashlaydi
    removeItemFromPausedOrders: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.pausedOrders = state.pausedOrders
        .map((order) => ({
          ...order,
          orderItems: (order.orderItems || []).filter(
            (it) => it._id !== itemId
          ),
        }))
        .filter((order) => (order.orderItems || []).length > 0);
    },

    // 🧹 CLEAR CART: hamma pausedOrders ni tozalaydi
    clearPausedOrders: (state) => {
      state.pausedOrders = [];
    },
  },
});

export const {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders,
  removeItemFromPausedOrders,
  clearPausedOrders,
} = ordersPageSlice.actions;

export default ordersPageSlice.reducer;
