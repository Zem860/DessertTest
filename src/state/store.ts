import { configureStore } from '@reduxjs/toolkit';
import cartDataReducer from './cartData/cartDataSlice'
export const store = configureStore(
    {
        reducer:{  //資料
            cartData:cartDataReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
