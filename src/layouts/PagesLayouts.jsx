import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagesLayouts = ({ children }) => {
  return (
    <div className=" pages-layout">
      <Navbar />
      <div className="px-4 ">{children}</div>
      <Footer />
    </div>
  );
};

export default PagesLayouts;
