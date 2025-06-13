import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const PagesLayouts2 = ({ children }) => {
  return (
    <div className="pages-layout-two">
      <Navbar2 />
      <div className="px-4 ">{children}</div>
      <Footer/>
    </div>
  );
};

export default PagesLayouts2;
