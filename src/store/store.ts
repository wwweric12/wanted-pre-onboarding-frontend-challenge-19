import { configureStore } from '@reduxjs/toolkit'
import {  slice } from './slice/slice'



export const store = configureStore({
  reducer: {
    todos : slice.reducer,
  }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// RootState는 스토어의 상태 타입을 나타냅니다.
// AppDispatch는 스토어의 디스패치 타입을 나타냅니다. 
