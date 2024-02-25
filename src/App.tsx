import styled from 'styled-components';
import './App.css';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<string[]>([]);

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setTodo(e.target.value);
  }

  const handleTodoInput = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setTodo("");
    setTodos([...todos, todo]);
    console.log(todos)
  }

  return (
    <Frame>
      <TodoTitle>Todo List</TodoTitle>
      <TodoForm onSubmit={handleTodoInput}>
        <Input placeholder='input' handleChange={handleChange} value={todo}/>
        <Button type="submit"> add </Button>
      </TodoForm>
      <TodoListContainer>
        {todos.map((item)=>(
          <TodoListBox>
            <TodoList>{item}</TodoList>
            <Button type="submit">delete</Button>
          </TodoListBox>
        ))}
      </TodoListContainer>  
    </Frame>
  );
}

export default App;


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
const Button = styled.button`
  width:100px;
  height: 50px;
  border : 1px solid black;
  border-radius: 10px;
`
const TodoListContainer =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`


const TodoListBox = styled.div`
  width:500px;
  height: 70px;
  display  :flex ;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  border: 1px solid black;
  border-radius: 10px;
`

const TodoList = styled.div`
  display: flex;
  align-items: center;

`