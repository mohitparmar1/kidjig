import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen bg-blue-50 rounded-b-xl bg-hero bg-cover bg-center flex items-center justify-center relative z-30">
      <section className="flex flex-col py-10 px-6 md:py-20 md:px-20 lg:py-40 lg:px-44 font-display text-white gap-5 relative z-20">
        <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl gap-3">
          <span>Empowering Lives Through</span>
          <p>
            Innovative{" "}
            <span className="border-b-4 md:border-b-6 lg:border-b-8 border-[#7F93FF]">
              AI
            </span>{" "}
            Technologies.
          </p>
        </div>
        <div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin mt-3">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <button className="bg-[#6A35FF] text-base md:text-xl text-white font-bold py-2 px-4 md:py-2 md:px-6 rounded-md">
            Explore Our Services
          </button>
          <button className="border-2 border-[#6881FF] text-white text-base md:text-xl rounded-md py-2 px-4 md:py-2 md:px-6">
            Learn More
          </button>
        </div>

        <span className="my-10 flex items-center justify-center text-sm md:text-base lg:text-lg text-main-text opacity-80">
          From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions
          🌟✨ From Ideas to
        </span>
      </section>
    </div>
  );
}

export default Hero;
