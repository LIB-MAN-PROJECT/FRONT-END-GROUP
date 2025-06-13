import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="navtwo flex items-center justify-between bg-black text-white">
      <p className="text-xl font-semibold">
        <Link to = "/">Welcome Admin!</Link>
      </p>
      <ul className="flex gap-x-8">
        <li>
          <Link to="/booksadm" className="hover:underline">
            Find All Books
          </Link>
        </li>
        <li>
          <Link to="/book-form" className="hover:underline">
            Want to Add A Book?
          </Link>
        </li>
        <li>
          <Link to="/contactsupport" className="hover:underline">
            Reach Support Team
          </Link>
        </li>
      </ul>
      <Link to="/admin">
        <button className=" hover:underline text-white py-2 px-4 rounded-md transition">
          USER DASHBOARD
        </button>
      </Link>
    </nav>
  );
};

export default Navbar2;
