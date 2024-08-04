import React, { useState } from 'react';
import toast from 'react-hot-toast';

// if you add a newTodo, the data should be rendered (albeit temporarily) tin your browser.

const AddTodoForm = ({ addTodo, className }) => {
  // local state for managing our form input values
  const [formData, setFormData] = useState({ title: '', description: '' });

  // handles change in form inputs
  // ensures we can track all changes in form inputs
  const handleChange = (e) => {
    // const title =
    const { name, value } = e.target;
    
    // create a copy of our current formData state
    //   const updatedFormData = { ...formData };
   
       /* 
        let myObj = {
         key1: value1,
         key2: value1
       }
       
       let updatedFormData = {
         name: 'title value',
         description: 'description value'
       }
       */
   
       // update the specific specific field in our copied state
       // check lines 18-28 for illustration
       //updatedFormData[name] = value;
       // console.log(name, value);
   
       // console.log(updatedFormData);
       //set the new state with the updated field data
       //setFormData(updatedFormData);
       // console.log(eejhfehjfbjh);
       
    setFormData({ ...formData, [name]: value });
  };
  
  const handleAddTodo = (e) => {
    //  prevent default form submission behavior
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: formData.title,
      description: formData.description,
      isComplete: false,
      // description: e.target.title.value,
      // title: e.target.title.value,
    };
    // console.log('new todo data:', newTodo);
    
    // call the addTodo func that we had passed as a prop and update our original todo
    addTodo(newTodo);
    setFormData({ title: '', description: '' });// reset form inputs after submission
    toast.success('Todo added successfully'); // show a success toast message
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
