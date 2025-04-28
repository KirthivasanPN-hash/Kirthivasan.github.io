import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      company: 'Indiana University Bloomington',
      period: 'November 2024 - April 2025',
      description: [
        'Programmed a data collection pipeline using BeautifulSoup and Selenium to automate the extraction of 1,000+ data points from online sources, improving data acquisition efficiency and reducing manual data collection effort.',
        'Built a text processing pipeline using PyMuPDF and spaCy Sentencizer to extract and analyze sentence-level representations, reducing time complexity for extraction process and enabling faster analysis for datasets.',
        'Streamlined data transformation processes using tqdm, generating embeddings for over 500 sentences and implementing retrieval techniques to optimize data processing pipelines for faster insights.',
        'Integrated Large Language Models for PDF summarization and key insight extraction, content analysis, keyword identification, and contextual understanding, reducing manual effort and enhancing data processing efficiency.'
      ],
    },
    {
      title: 'Software Engineer Internship',
      company: 'Food Fight',
      period: 'June 2024 - August 2024',
      description: [
        'Created RESTful APIs using FastAPI, enabling seamless application-database communication and achieving an increase in API responsiveness. Adhered Pydantic models for data validation, database operations, and reducing error rates.',
        'Enabled SQLAlchemy for Pythonic database interactions, enabling seamless execution of queries using an ORM. Optimized query performance, reducing execution time and improving database efficiency, leading to a 10% decrease in error rates.',
        'Solved an user matching recommendation system by leveraging cosine and Jaccard similarity metrics. Analyzed multidimensional user data including preferences, behavioral patterns, and historical interactions for personalized recommendations',
        'Leveraged AWS Lambda to support serverless tasks, optimizing resource usage and reducing server costs. Integrated AWS CloudWatch for real-time log monitoring and alerting, assisting in issue detection and resolution.'
      ],
    },
    {
      title: 'Data Science Internship',
      company: 'MATIC Incubated at IIITDM',
      period: 'September 2022 - November 2022',
      description: [
        'Devised a novel model to predict insurance claim probabilities with 85% accuracy, potentially streamlining claims processingand reducing manual inspection costs.',
        'Reinforced transfer learning with YOLOv5 to detect and classify vehicle damage with 95% mean average precision (mAP),significantly outperforming traditional object detection methods.',
      ],
    },
    {
      title: 'React Developer Internship',
      company: 'Indiespirit Technology',
      period: 'August 2021 - November 2021',
      description: [
        'Coded a dynamic, interactive web application with real-time chat functionality by utilizing React.js, HTML5, and CSS, ensuring a seamless user experience with efficient state management and responsive design.',
        'Involved in creating reusable and modular website components using React props, event handlers, and Hooks to enhancemaintainability, improve performance, and optimize UI responsiveness across different screen sizes.'
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#2E4052] mb-8">Experience</h2>
      <div className="w-full relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2E4052]/20"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 w-4 h-4 bg-[#2E4052] rounded-full -translate-x-1/2"></div>
              
              <div className="bg-white/50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2E4052]">{exp.title}</h3>
                    <p className="text-[#2E4052]">{exp.company}</p>
                  </div>
                  <p className="text-[#2E4052] font-medium">{exp.period}</p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-[#2E4052]">
                  {exp.description.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 