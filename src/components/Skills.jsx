import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Web Development',
      skills: ['MERN Stack', 'RESTful APIs', 'Flask', 'Django']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    },
    {
      category: 'Libraries',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost', 'OpenCV', 'TensorFlow', 'HuggingFace']
    },
    {
      category: 'Data Science & ML Algorithms',
      skills: ['Linear Regression','Random Forest', 'Decision Tree', 'k-means clustering', 'SVM', 'Naive Bayes', 'Neural Networks'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes', 'Kafka', 'dbt', 'Tableau', 'PowerBI'],
    },
    {
      category: 'Cloud Computing',
      skills: ['AWS (EC2, DynamoDB, S3, Lambda, Glue, CloudFormation)', 'Azure', 'GCP'],
    }
  
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#2E4052] mb-8">Skills</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white/50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-[#2E4052] mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-white/50 text-black rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 