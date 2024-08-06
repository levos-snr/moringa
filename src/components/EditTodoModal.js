import React, { useState, useEffect } from 'react';

const EditTodoModal = ({ todo, onClose, onSave }) => {
  const [title, setTitle] = useState(todo?.title || '');
  const [description, setDescription] = useState(todo?.description || '');

  useEffect(() => {
    setTitle(todo?.title || '');
    setDescription(todo?.description || '');
  }, [todo]);

  const handleSave = () => {
    onSave({ ...todo, title, description });
    onClose();
  };

  return (
    <dialog id="edit_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Todo</h3>
        <form className="py-4">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered"
            />
          </div>
          <div className="modal-action">
            <button type="button" onClick={handleSave} className="btn btn-primary">
              Save
            </button>
            <button type="button" onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditTodoModal;
