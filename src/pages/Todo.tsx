import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/store';
import { addTodo, deleteTodo } from '../store/slice/slice';
import Input from '../components/Input/Input';
import Button from '../components/Button/\bButton';

const Todo = () => {
    const [todo,setTodo]=useState<string>("");
    const dispatch = useDispatch();
    const todos = useSelector((state:RootState)=>state.todos);
  
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setTodo(e.target.value);
    }
  
    const handleTodoInput = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      setTodo("");
      dispatch(addTodo(todo))
    }
  
    const handleDeleteTodo=(id:number)=>{
        dispatch(deleteTodo(id))
    }
  
  return (
    <Frame>
    <TodoTitle>Todo List</TodoTitle>
    <TodoForm onSubmit={handleTodoInput}>
      <Input placeholder='input' handleChange={handleChange} value={todo}/>
      <Button> add </Button>
    </TodoForm>
    <TodoListContainer>
      {todos.todoList.map((item)=>(
        <TodoListBox key={item.id}>
          <TodoList >{item.todo}</TodoList>
          <Button onClick={()=>handleDeleteTodo(item.id)} >delete</Button>
        </TodoListBox>
      ))}
    </TodoListContainer>  
  </Frame>
  )
}

export default Todo

const Frame = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:50px;
`

const TodoTitle = styled.div`
  margin-bottom: 30px;
`

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  gap:10px;
  margin-bottom: 10px;
`

const TodoListContainer =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`


const TodoListBox = styled.ul`
  width:500px;
  height: 70px;
  display  :flex ;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  border: 1px solid black;
  border-radius: 10px;
`

const TodoList = styled.li`
  display: flex;
  align-items: center;

`