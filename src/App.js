import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import StateDemo from './StateDemo';
import TodoList from './components/TodoList';
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast';

const myTodos = [
  { id: 1, title: 'todo one', description: 'lorem ipsum lorem', isComplete: false },
  { id: 2, title: 'todo two', description: 'lorem ipsum lorem', isComplete: true },
  { id: 3, title: 'todo three', description: 'lorem ipsum lorem', isComplete: false },
  { id: 4, title: 'todo four', description: 'lorem ipsum lorem', isComplete: true },
];

// parent component of <TodoList />
function App() {
  const [todos, setTodos] = useState(myTodos);
  
  // func that handles adding a newTodo:{} and pass it as a prop to the AddTodoForm
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
   // func that handles toggling a todo's isComplete status
  const toggleTodo = (id) => {
    // map over the todos array and update the isComplete status of the todo with the id passed
      setTodos(todos.map(todo =>
        // if the todo.id is equal to the id passed, update the isComplete status
        // `!todo.isComplete` is a shorthand for flipping the boolean value
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      
      ));
      
      // toast notification
      // if the todo is complete, show a toast notification
      // if the todo is incomplete, show a different toast notification 
      const todo = todos.find(todo => todo.id === id);
      if (todo.isComplete) {
        toast.success(`Task "${todo.title}" marked as complete`);
      } else {
        toast.error(`Task "${todo.title}" marked as incomplete
        `);
      }
    };

  return (
    <>
    <div className='App container mx-auto p-4'>
      <Header />
      <div className='flex flex-col lg:flex-row lg:space-x-8 mt-14'>
        <div className='flex-1 flex items-stretch'>
          <AddTodoForm addTodo={addTodo} className='flex-1' />
        </div>
        <div className='flex-1 flex items-stretch'>
          <StateDemo className='flex-1' />
        </div>
      </div>
      <div id='todolist' className='mt-8'>
        {/* passing todos as a prop to <TodoList /> */}
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
      
        {/* Toaster component from react-hot-toast*/}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
    </>
  );
}

export default App;
