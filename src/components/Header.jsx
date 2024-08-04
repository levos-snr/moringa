import { FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer">
          <FaHome className="text-2xl" />
          <h1 className="text-2xl font-bold">My Todo App</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#tasks" className="hover:underline">Tasks</a>
          <a href="#todos" className="hover:underline">Todos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
