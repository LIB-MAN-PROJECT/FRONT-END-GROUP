import PagesLayouts from "../layouts/PagesLayouts";
import aboutImg1 from "../assets/img1.jpg"
import aboutImg2 from "../assets/img2.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PagesLayouts>
      <section className="about-section text-black">
        <div className="about-left">
          <h3 className="text-pink-500">About Us</h3>
          <h2>A One Stop Shop for All Your Book Needs</h2>
          <p>
            Welcome to the Lumina Library Management System! Founded by Jedidah, Jennifer, Ebow, and Juliet, we've crafted an intuitive platform to bring the world of books to life for everyone in Accra. Whether you're a reader eager to explore new stories, or an administrator efficiently managing our vibrant collection, Lumina is designed to make your library experience seamless, smart, and truly enjoyable.
          </p>
          <a><Link to ="/bestsellers">Explore Our Best Sellers</Link></a>
        </div>
        <div className="about-images">
          <img src={aboutImg1} alt="book.title" className="img1"/>
           <img src={aboutImg2} alt="book.title" className="img2"/>
        </div>
      </section>
    </PagesLayouts>
  );
};

export default About;
