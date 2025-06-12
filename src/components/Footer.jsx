import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6 mt-10 gap-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Lumina Library.{" "}
          <br /> All rights reserved.
        </p>
        <div>
          <h2 className="text-lg font-semibold hover:underline">Opening Hours</h2>
          <ul className="text-sm mt-2 space-y-1">
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="flex space-x-4 sm:mt-0">
          <li className="text-sm">
            <h2 className="text-lg font-semibold hover:underline mt-1">Privacy Policy</h2>
            
            <p>
              We do not share your personal data with <br /> third parties
              unless required by law.
            </p>
          </li>

          <li className="text-sm">
            <h2 className="text-lg font-semibold hover:underline mt-1">Terms of Services</h2>
           
            <p>
              By using this library system, you agree to comply <br /> with and
              be bound by these terms.
            </p>
          </li>

          <li className="text-lg font-semibold hover:underline mt-1">
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
