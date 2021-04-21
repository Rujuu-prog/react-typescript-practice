import React, { useState } from 'react';
import './App.css';
import {Todo} from './Todo';
import axios from 'axios';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data)
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: any) => 
        <Todo title={todo.title} userid={todo.userId}/>
      )}
      
    </div>
  );
}

export default App;
