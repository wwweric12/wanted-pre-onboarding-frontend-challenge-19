import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo  {
    id: number,
    todo: string,
};
export interface TodoList {
    todoList : Todo[]
}

const initialState:TodoList = {
    todoList:[]
}

let nextId =1;
  


export const slice=createSlice({ // action reducer를 같이 생성 
    name: "todo",
    initialState ,
    reducers:{
        addTodo :{
            reducer:(state,action:PayloadAction<Todo>)=>{
            state.todoList =[...state.todoList,action.payload];
        },
        prepare: (todo: string) => ({ // prepare 함수를 통해 todo 문자열을 받아서 액션의 payload를 생성합니다. 그리고 reducer 함수를 통해 상태를 업데이트
            payload: {
                id: nextId++,
                todo
            }
        })
    },
        deleteTodo: (state,action:PayloadAction<number>) =>{
            state.todoList = state.todoList.filter((item)=>item.id !== action.payload)
        },
    }
    
})  

export const { addTodo, deleteTodo } = slice.actions;
  




