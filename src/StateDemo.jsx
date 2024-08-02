import React, { useState } from "react";

function StateDemo({ className }) {
  const [name, setName] = useState("rodgers");
  const [grade, setGrade] = useState(75);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    
    if (count % 2 === 0) {
      setName("Brenda");
      setGrade(75);
    } else {
      setName("jane");
      setGrade(85);
    }
     handleIncrement();
  };

  return (
    <div className={`${className} flex flex-col mb-5`}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1">
        <div className="flex justify-between mb-6">
          <div>
            <button
              onClick={handleIncrement}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              {count}
            </button>
          </div>
          <button
            onClick={handleClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Click Me
          </button>
        </div>
        <p className="text-xl font-medium text-gray-800">
          My name is <span className="font-semibold text-blue-600">{name}</span>{" "}
          and I got a score of{" "}
          <span className="font-semibold text-green-600">{grade}</span>
        </p>
      </div>
    </div>
  );
}

export default StateDemo;
