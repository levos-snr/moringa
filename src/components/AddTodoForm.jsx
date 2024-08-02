import React, { useState } from 'react';

const AddTodoForm = ({ addTodo, className }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: formData.title,
      description: formData.description,
      isComplete: false,
    };
    addTodo(newTodo);
    setFormData({ title: '', description: '' });
  };

  return (
    <div className={`${className} flex flex-col  mb-5`}>
      <form onSubmit={handleAddTodo} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1'>
        <div className='mb-4'>
          <input
            type='text'
            name='title'
            value={formData.title}
            placeholder='Enter task title'
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            name='description'
            value={formData.description}
            placeholder='Enter task description'
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
