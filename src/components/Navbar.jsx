import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isHomePage
          ? "bg-transparent text-white"
          : "bg-black/60 text-white border-b border-red-900"
      } px-6 py-4 flex justify-between items-center transition duration-300`}
    >
      <p className="text-xl font-semibold">
        <Link to="/admin">Welcome User!</Link>
      </p>

      <ul className="flex gap-4 text-sm md:text-base">
        <li>
          <Link to="/about-us" className="hover:underline">
            Get To Know Us!
          </Link>
        </li>
        <li>
          <Link to="/books" className="hover:underline">
            Explore Our Catalogue
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Reach Us!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
