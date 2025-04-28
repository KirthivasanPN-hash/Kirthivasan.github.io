import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <div className="max-w-3xl">
        <p className="text-2xl md:text-3xl mb-2 text-[#2E4052]">Hi, I'm 👋</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2E4052]">
          Kirthivasan PN
        </h2>
        <h3 className="text-3xl md:text-4xl mb-6 text-[#2E4052]">
          Solutions Architect (focused on AI/data solutions)
        </h3>
        <p className="text-xl md:text-2xl mb-8 text-[#2E4052] max-w-2xl mx-auto">
          Driven by a passion for analysis, research, and crafting impactful, innovative solutions.
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="#experience"
            className="bg-[#2E4052] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            View My Experience
          </a>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#2E4052] text-[#2E4052] px-8 py-3 rounded-lg hover:bg-[#2E4052] hover:text-white transition-colors text-lg"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home; 