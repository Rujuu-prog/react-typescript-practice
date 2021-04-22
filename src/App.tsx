import React, { useState } from 'react';
import './App.css';
import {Todo} from './Todo';
import {Text} from './Text';
import {UserProfile} from './UserProfile';
import axios from 'axios';
import { TodoType } from './types/todo'
import { User } from './types/user';

const user: User = {
  name : "Rujuu",
  // hobbies : ["プログラミング", "ゲーム"],
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
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: any) => 
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
        
      )}
      
    </div>
  );
}

export default App;
