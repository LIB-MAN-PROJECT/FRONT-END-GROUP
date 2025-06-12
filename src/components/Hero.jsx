import backgroundVideo from "../assets/background.mp4";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
<div className="overlay">
        <h1>THE LUMINA LIBRARY</h1>
        <p>
          "Libraries are not a luxury but one of the necessities of life"
          <br />
          <br />
          "When in doubt, go to the library"
        </p>
      </div>
    </section>
  );
};

export default Hero;
