import React, { useState, useMemo } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'LLM based Web Crawler',
      technologies: ['Python', 'Crawl4AI', 'OpenAI', 'SQLAlchemy', 'SQLite'],
      categories: ['Software Engineering', 'Machine Learning'],
      image: '/assets/images/web_crawler.png',
      github: 'https://github.com/KirthivasanPN-hash/Data_engineering/tree/main/AI_web_crawler',
      //demo: 'https://github.com/KirthivasanPN-hash/Data_engineering/tree/main/AI_web_crawler',
      details: [
        'Strategically wrote a web scraping program using Crawl4AI and Python, leveraging advanced browser control and LLM-based extraction to parse and extract structured data, enabling efficient and reusable data ingestion.',
        'Processed data processing workflows using Pydantic for schema validation and CSV serialization, automating data storage for structured analysis, and improving data accessibility for Research Assistantship projects.'
      ]
    },
    {
      title: 'Automated Movie Data Transformation Pipeline',
      technologies: ['Python', 'SQL', 'Docker', 'DBT', 'CRON JOB', 'Airflow'],
      categories: ['Data Engineering'],
      image: '/assets/images/movie_pipeline.png',
      github: 'https://github.com/KirthivasanPN-hash/Data_engineering',
      //demo: 'https://ml-dashboard-demo.vercel.app',
      details: [
        'Designed and coded a robust ELT pipeline using Docker containers, automating the extraction, transformation, and loading of large-scale movie dataset. Performed Orchestration via Airflow for optimizing task scheduling and error handling.',
        'Integrated DBT for data transformation, utilizing Jinja templates and macros to create SQL models for filtering the movie dataset. Executed transformations, complex aggregations, joins, and data enrichment techniques, to ensure optimization.',
        'Configured a cron job for automated pipeline execution, streamline the entire workflow, minimizing manual intervention, reducing errors, and operational efficiency by maintaining regular updates and data processing intervals.'
      ]
    },
    {
      title: 'Washington Housing Sales Dashboard',
      //description: 'A comprehensive data analytics platform for business intelligence. Features include data visualization, reporting, and predictive analytics.',
      technologies: ['Tableau'],
      categories: ['Data Analytics'],
      image: '/assets/images/housing-dashboard.png',
      //github: 'https://github.com/KirthivasanPN-hash/Data-Analytics-Platform',
      demo: 'https://public.tableau.com/views/WashingtonHousingPrices/Washington_Housing_Prices?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      details: [
        'Developed an interactive Tableau dashboard to visualize housing data, incorporating filters for house price, square footageyear built, and number of bedrooms/bathrooms, enabling real-time exploration of housing trends and market insights.',
        'Analyzed housing price trends with an interactive line graph, tracking daily average house prices for the selected month and year, revealing significant price fluctuations and peak periods in the housing market.',
        'Implemented a heatmap to geographically visualize house prices based on conditions (Good, Very Good, Average), identifying regions with high-value properties and affordable homes, providing key insights into location-based pricing patterns.',
        'Performed distribution analysis of bedrooms, bathrooms, and house prices, identifying price concentration in the mid-range ($400K–$800K) and highlighting seasonal fluctuations influenced by location and property features.',
      ]
    },
    {
      title: 'Market Pulse: Real-Time Stock Data Pipeline',
      //description: 'A collaborative task management application with real-time updates and team features. Built using React and Firebase.',
      technologies: ['Python', 'AWS (EC2, RDS, Athena, Glue, S3)', 'BOTO 3', 'Kafka'],
      categories: ['Data Engineering'],
      image: '/assets/images/market-pipeline.jpg',
      github: 'https://github.com/KirthivasanPN-hash/Data_engineering',
      //demo: 'https://task-management-app.vercel.app',
      details: [
        'Initiated AWS EC2 to manage Kafka brokers and producer/consumer communications, enabling real-time data streaming services. Configured Zookeeper for efficient cluster coordination and fault-tolerant operations.',
        'Implemented Boto3 SDK to interact with AWS services via Python, facilitating real-time data ingestion from Kafka into S3 buckets while ensuring swift preparation for cataloging in RDS via AWS Glue',
        'Set up a real-time stock price pipeline and AWS Glue crawlers to load and structure data in Athena, enabling real-time stock market analysis through SQL queries and insights generation.'
      ]
    },
    {
      title: 'Aviation Analytics Pipeline on GCP',
      //description: 'A collaborative task management application with real-time updates and team features. Built using React and Firebase.',
      technologies: ['Python', 'AWS (EC2, RDS, Athena, Glue, S3)', 'BOTO 3', 'Kafka'],
      categories: ['Data Engineering'],
      image: '/assets/images/aviation.png',
      github: 'https://github.com/KirthivasanPN-hash/Data_engineering/tree/main/Flight_ticket_ETL',
      //demo: 'https://task-management-app.vercel.app',
      details: [
        'Initiated AWS EC2 to manage Kafka brokers and producer/consumer communications, enabling real-time data streaming services. Configured Zookeeper for efficient cluster coordination and fault-tolerant operations.',
        'Implemented Boto3 SDK to interact with AWS services via Python, facilitating real-time data ingestion from Kafka into S3 buckets while ensuring swift preparation for cataloging in RDS via AWS Glue',
        'Set up a real-time stock price pipeline and AWS Glue crawlers to load and structure data in Athena, enabling real-time stock market analysis through SQL queries and insights generation.'
      ]
    },
    {
      title: 'Deliverwise - delivery service application ',
      //description: 'A collaborative task management application with real-time updates and team features. Built using React and Firebase.',
      technologies: ['MERN Stack', 'Paypal SDK', 'Google Maps API'],
      categories: ['Software Engineering'],
      image: '/assets/images/delivery.png',
      github: 'https://github.com/rohit2905/CSCI_P565_Team4_Backend',
      demo: 'https://deliverwise.vercel.app/',
      details: [
        'Developed a sophisticated React.js recommendation system in an advanced web development course, boosting user engagement by 40%. Implemented robust authentication protocols for enhanced security, data-driven design, and application security.',
        'Engineered RESTful APIs for backend operations like management, tracking, chatting, and reviews; implemented strong error handling measures and client-centric error messages, ensuring operational continuity and client engagement.'
      ]
    },
    {
      title: 'Schmooze - Chatting Cord',
      //description: 'A collaborative task management application with real-time updates and team features. Built using React and Firebase.',
      technologies: ['React.js', 'RESTful API', 'Postman', 'Socket.IO'],
      categories: ['Software Engineering'],
      image: '/assets/images/chat-app.jpg',
      github: 'https://github.com/KirthivasanPN-hash/Schmooze-ChattingCord',
      //demo: 'https://deliverwise.vercel.app/',
      details: [
        'Engineered an interactive web application with real-time chat functionality, leveraging HTML, CSS, and React JS.',
        'Created Website components an props, event handlers, and Hooks to optimize the user interface, resulting in a 40% increase in user engagement and a 25% decrease in bounce rate.',
        'Integrated Express JS to create a server for Socket.IO to emit and output events performed by a user in specific groups to the DOM and deployed using the Heroku platform.'
        ,
      ]
    },
    {
      title: 'Docuquery - Document Querying System - Research work',
      //description: 'A collaborative task management application with real-time updates and team features. Built using React and Firebase.',
      technologies: ['Beautiful Soap', 'Selenium', 'HuggingFace', 'Langchain', 'LangIndex', 'spaCy sentencizer', 'Sentence Transformers', 'Llama3 7b'],
      categories: ['Machine Learning'],
      image: '/assets/images/docuquery.png',
      github: 'https://github.com/KirthivasanPN-hash/Schmooze-ChattingCord',
      //demo: 'https://deliverwise.vercel.app/',
      details: [
        'Programmed a data collection pipeline using BeautifulSoup and Selenium to automate the extraction of 1,000+ data points from online sources, improving data acquisition efficiency and reducing manual data collection effort.',
        'Built a text processing pipeline using PyMuPDF and spaCy Sentencizer to extract and analyze sentence-level representations,reducing time complexity for extraction process and enabling faster analysis for datasets.',
        'Streamlined data transformation processes using tqdm, generating embeddings for over 500 sentences and implementing retrieval techniques to optimize data processing pipelines for faster insights.',
        'Integrated Large Language Models for PDF summarization and key insight extraction, content analysis, keyword identification and contextual understanding, reducing manual effort and enhancing data processing efficiency.'
      ]
    }

  ];

  const categories = ['all', 'Software Engineering', 'Data Engineering', 'Data Analytics', 'Machine Learning'];

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.categories.includes(selectedCategory));
  }, [projects, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-[#2E4052] mb-8">Projects</h2>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#2E4052] mb-4 text-center">Categories</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-[#2E4052] text-white'
                  : 'bg-white/50 text-[#2E4052] hover:bg-white/70'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white/50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative group overflow-visible"
          >
            <div className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[#2E4052]">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((category, catIndex) => (
                  <span
                    key={catIndex}
                    className="px-3 py-1 bg-[#2E4052]/20 text-[#2E4052] rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/70 text-[#2E4052] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Details (shown on hover) */}
              <div className="absolute inset-0 bg-[#2E4052]/95 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                <ul className="list-disc pl-4 text-white space-y-2 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
                
                {/* Links moved to hover overlay */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-[#2E4052] hover:bg-opacity-90 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-white text-white hover:bg-white hover:text-[#2E4052] px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center text-[#2E4052] mt-8">
          No projects found in this category.
        </div>
      )}
    </div>
  );
};

export default Projects; 