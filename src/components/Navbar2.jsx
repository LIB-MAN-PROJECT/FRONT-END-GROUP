import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white">
      <p className="text-xl font-semibold">Welcome Admin!</p>
      <ul className="flex gap-x-8">
        <li>
          <Link to="/books" className="hover:text-pink-400 transition">
            Find All Books
          </Link>
        </li>
        <li>
          <Link to="/book-form" className="hover:text-pink-400 transition">
            Want to Add A Book?
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-pink-400 transition">
            Reach Support Team
          </Link>
        </li>
      </ul>
      <Link to="/user-panel">
        <button className="bg-pink-700 hover:bg-pink-800 text-white py-2 px-4 rounded-md transition">
          User Panel
        </button>
      </Link>
    </nav>
  );
};

export default Navbar2;
