import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav className={isHomePage ? "navbar home-navbar" : "navbar black-navbar"}>
      <p className="text-xl font-semibold">
        <Link to="/">Welcome User!</Link>
      </p>

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
        to="/admin"
        className=" hover:underline text-white py-3 px-6 rounded-lg text-base font-medium transition duration-300"
      >
        ADMIN DASHBOARD
      </Link>
    </nav>
  );
};

export default Navbar;
