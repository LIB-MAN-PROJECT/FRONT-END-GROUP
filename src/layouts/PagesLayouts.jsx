import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagesLayouts = ({ children }) => {
  return (
    <div className="pt-[80px] pb-[80px] min-h-screen pages-layout">
      {/* Navbar height ~80px */}
      <Navbar />
      <div className="px-4 md:px-8">{children}</div>
      {/* Footer height ~80px */}
      <Footer />
    </div>
  );
};

export default PagesLayouts;
