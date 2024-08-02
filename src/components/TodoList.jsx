import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  const todoItemsFilteredAndMapped = (filterCondition) =>
    todos
      .filter((todo) => todo.isComplete === filterCondition)
      .map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div id='todolist' className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 p-4'>
        <h3 className='text-xl font-bold mb-4'>Completed Tasks</h3>
        {todoItemsFilteredAndMapped(true)}
      </div>
      <div className='w-full lg:w-1/2 p-4'>
        <h3 className='text-xl font-bold mb-4'>Incomplete Tasks</h3>
        {todoItemsFilteredAndMapped(false)}
      </div>
    </div>
  );
};

export default TodoList;
