import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartDataState {
  value: string[];
}

// 正確定義 initialState
const initialState: CartDataState = {
  value: [
    'https://bit.ly/2QvsT63',
    'https://bit.ly/2zBDAxX',
    'https://bit.ly/2zKOP7w',
  ],
};

const CartDataSlice = createSlice({
  name: 'cartData', // name 應該是字符串
  initialState,
  reducers: {
    sayHello: () => {
      console.log('Hello world!');
    },

    deleteData: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.value.length) {
        state.value = state.value.filter((_, i) => i !== action.payload);
        console.log(`刪除的索引: ${action.payload}`);
      } else {
        console.error('無效的索引', action.payload);
      }
    },
  },
});

export const { deleteData } = CartDataSlice.actions;
export default CartDataSlice.reducer;
