import { FaCheck, FaTimes } from 'react-icons/fa';
// this is a child component of <TodoList />

function TodoItem({ todo,onToggle }) {
  
  // handleEdit 
  const handleEdit = (id) => {
    console.log(`task ID ${id} is to be edited`);
  };

  // handleDelete
  const handleDelete = (id) => {
    console.log(`task ID ${id} is to be deleted`);
  };

  return (
    <div className='border p-4 rounded shadow-md mb-4'>
      <p className='font-bold'>Title: {todo.title} </p>
      <p>Description: {todo.description} </p>
      <>
        {todo.isComplete ? (
          <div className='text-green-500 flex items-center'>
          <FaCheck className='mr-2' />
            <s>Task is complete</s>
          </div>
        ) : (
          <div className='text-red-500 flex items-center'>
          <FaTimes className='mr-2' />
          Task is incomplete
          </div>
        )}
        <button onClick={() => handleEdit(todo.id)} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2'>
          Edit
        </button>
        <button onClick={() => handleDelete(todo.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>
          Delete
        </button>
          <button
                onClick={() => onToggle(todo.id)}
                className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>
                {todo.isComplete ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
      </>
    </div>
  );
}

export default TodoItem;
