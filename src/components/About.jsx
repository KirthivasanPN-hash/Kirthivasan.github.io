import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#2E4052] mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-[#2E4052]">
            I am a passionate developer with expertise in full-stack development, data science, and machine learning.
            With a strong foundation in computer science and a keen eye for detail, I strive to create efficient and
            scalable solutions to complex problems.
          </p>
          <p className="text-[#2E4052]">
            My journey in technology began with a curiosity about how things work, which led me to explore various
            aspects of software development and data analysis. I enjoy learning new technologies and applying them
            to solve real-world problems.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-[#2E4052] mb-4">Key Strengths</h3>
            <ul className="list-disc list-inside text-[#2E4052] space-y-2">
              <li>Full Stack Development</li>
              <li>Data Analysis & Visualization</li>
              <li>Machine Learning & AI</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
            <img 
              src="/assets/images/profile.jpg" 
              alt="Kirthivasan PN" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
