import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row bg-amber-950 text-white justify-around p-2.5">
      <p> LOGO LIES HERE</p>
      <ul className="flex flex-row gap-8">
        <li>
          {" "}
          <Link to="/">Get To Know Us!</Link>
        </li>
        <li>
          <Link to="/books">Explore Our Books</Link>
        </li>
        <li>
          {" "}
          <Link to="/book-form">Want to Add A Book?</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Reach Us!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
