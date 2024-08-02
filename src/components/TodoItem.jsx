import React from 'react';

function TodoItem({ todo }) {
  const handleEdit = (id) => {
    console.log(`task ID ${id} is to be edited`);
  };

  const handleDelete = (id) => {
    console.log(`task ID ${id} is to be deleted`);
  };

  return (
    <div id='todoitem' className='border p-4 rounded shadow-md mb-4'>
      <p className='font-bold'>Title: {todo.title} </p>
      <p>Description: {todo.description} </p>
      <>
        {todo.isComplete ? (
          <p className='text-green-500'><s>Task is complete</s></p>
        ) : (
          <p className='text-red-500'>Task is incomplete</p>
        )}
        <button onClick={() => handleEdit(todo.id)} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2'>
          Edit
        </button>
        <button onClick={() => handleDelete(todo.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>
          Delete
        </button>
      </>
    </div>
  );
}

export default TodoItem;
