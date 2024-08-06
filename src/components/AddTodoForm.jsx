import React, { useState } from 'react';
import { toast } from 'react-toastify';

// if you add a newTodo, the data should be rendered (albeit temporarily) tin your browser.

const AddTodoForm = ({ addTodo, className }) => {
  // local state for managing our form input values
  const [formData, setFormData] = useState({ title: '', description: '' });
  
  const URL = 'https://server-vercel-vert.vercel.app/myTodos'

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

  const handleAddTodo = async (e) => {
    //  prevent default form submission behavior
    e.preventDefault();
    const newTodo = {
      title: formData.title,
      description: formData.description,
      isComplete: false,
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error('post request failure');
      }
      // call the addTodo func that we had passed as a prop and update our original todo
      addTodo(newTodo);
      setFormData({ title: '', description: '' }); // reset form inputs after submission
      toast.success(`❤️‍🔥 Task "${newTodo.title}" added successfully`);
    } catch (error) {
      toast.error(`🫣 Task "${newTodo.title}" failed to add`);
      console.error(error);
    }
  };

  return (
    <div className={`${className} flex flex-col  mb-5`}>
      <form
        onSubmit={handleAddTodo}
        className='card bg-base-100 shadow-lg p-5'
      >
        <div className='form-control mb-4'>
          <input
            type='text'
            name='title'
            value={formData.title}
            placeholder='Enter task title'
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>
        <div className='form-control mb-4'>
          <input
            type='text'
            name='description'
            value={formData.description}
            placeholder='Enter task description'
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>
        <div className='form-control'>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
