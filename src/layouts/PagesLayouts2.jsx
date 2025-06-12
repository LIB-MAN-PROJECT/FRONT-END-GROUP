import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";

const PagesLayouts2 = ({ children }) => {
  return (
    <div>
      <Navbar2 />
      {children}
      <Footer/>
    </div>
  );
};

export default PagesLayouts2;
