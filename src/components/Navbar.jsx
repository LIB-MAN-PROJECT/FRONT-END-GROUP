import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 bg-[#2d2d2d] text-white fixed top-0 w-full flex justify-between items-center z-50">
      <p className="text-xl font-semibold"><Link to ="/">Welcome User!</Link></p>

      <ul className="flex gap-6 text-lg">
        <li>
          <Link to="/about-us" className="hover:underline">
            Get To Know Us!
          </Link>
        </li>
        <li>
          <Link to="/books" className="hover:underline">
            Explore Our Books
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Reach Us!
          </Link>
        </li>
      </ul>

      <Link
        to="/admin-panel"
        className="bg-pink-700 hover:bg-pink-800 text-white py-3 px-6 rounded-lg text-base font-medium transition duration-300"
      >
        ADMIN PANEL
      </Link>
    </nav>
  );
};

export default Navbar;
