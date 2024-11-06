import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartDataState {
//   value: string[];
// }

interface CartItem {
  id:number;
  image: string;
  amount: number;
  price: number;
  name:string;
}

interface initialState {
  value: CartItem[];
}
// 正確定義 initialState
// const initialState: CartDataState = {
//   value: [
//     'https://bit.ly/2QvsT63',
//     'https://bit.ly/2zBDAxX',
//     'https://bit.ly/2zKOP7w',
//   ],
// };

const initialState = {
  value: [
    {id:0, image: 'https://bit.ly/2QvsT63', amount: 0, price: 450, name:"焦糖瑪卡龍"},
    {id:1, image: 'https://bit.ly/2zBDAxX', amount: 0, price: 450,  name:"焦糖瑪卡龍"},
    {id:2, image: 'https://bit.ly/2zKOP7w', amount: 0, price: 450,  name:"焦糖瑪卡龍" },
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
      } else {
        console.error('無效的索引', action.payload);
      }
    },
    increaseAmount:(state, action: PayloadAction<number>) => {
      state.value[action.payload].amount+=1
    },
    decreaseAmount:(state, action:PayloadAction<number>)=>{
      const target = state.value[action.payload];
      if (target.amount>0){
        target.amount-=1
      }
    }
  },
});

export const { deleteData, increaseAmount, decreaseAmount} = CartDataSlice.actions;
export default CartDataSlice.reducer;
