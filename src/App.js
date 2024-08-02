import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import StateDemo from './StateDemo';
import TodoList from './components/TodoList';

const myTodos = [
  { id: 1, title: 'todo one', description: 'lorem ipsum lorem', isComplete: false },
  { id: 2, title: 'todo two', description: 'lorem ipsum lorem', isComplete: true },
  { id: 3, title: 'todo three', description: 'lorem ipsum lorem', isComplete: false },
  { id: 4, title: 'todo four', description: 'lorem ipsum lorem', isComplete: true },
];

function App() {
  const [todos, setTodos] = useState(myTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='App container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>Todo Tutorial</h1>
      <div className='flex flex-col lg:flex-row lg:space-x-8'>
        <div className='flex-1 flex items-stretch'>
          <AddTodoForm addTodo={addTodo} className='flex-1' />
        </div>
        <div className='flex-1 flex items-stretch'>
          <StateDemo className='flex-1' />
        </div>
      </div>
      <div id='todolist' className='mt-8'>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
