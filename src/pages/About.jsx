import PagesLayouts from "../layouts/PagesLayouts";
// import aboutImg1 from "./assets/img1.jpg";
// import aboutImg2 from "./assets/img2.jpg";

const About = () => {
  return (
    <PagesLayouts>
      <section className="about-section text-white">
        <div className="about-left">
          <h3 className="text-pink-500">About Us</h3>
          <h2>A One Stop Shop for All Your Beauty Needs</h2>
          <p>
            Let your beauty speak volumes. From subtle elegance to show-stopping
            glam, our expert hands are here to bring your vision to life with
            care, creativity, and a touch of sisterly magic.
          </p>
          <a href="#">Learn More</a>
        </div>
        {/* <div className="about-images">
          <img src={aboutImg1} className="img1" />
          <img src={aboutImg2} className="img2" />
        </div> */}
      </section>
    </PagesLayouts>
  );
};

export default About;
