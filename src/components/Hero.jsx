import backgroundVideo from "../assets/background.mp4";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen font-['Edu_NSW_ACT_Hand_Pre'] z-0"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col items-center justify-center h-full text-white bg-black/40 text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          THE LUMINA LIBRARY
        </h1>
        <br />
        <br />
        <p className="text-base md:text-lg max-w-3xl leading-relaxed">
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
