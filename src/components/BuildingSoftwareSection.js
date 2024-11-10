import React from 'react';
import './BuildingSoftwareSection.css';

const BuildingSoftwareSection = () => {
  const sectionsData = [
    {
      title: 'Build the right team to scale',
      description: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).',
      quote: 'Simform is quick to identify larger problems with the software so we decided to expand our scope to build new modules.',
      author: { name: 'Jeewa Markram', position: 'CEO' },
      image: '/path/to/image1.png', // Replace with actual image paths
    },
    {
      title: 'Achieve Success with a Dedicated Team',
      description: 'Our team helps you overcome challenges in scaling, with long-term support that aligns with your goals and processes.',
      quote: 'The team’s commitment has been exceptional, helping us reach our objectives seamlessly.',
      author: { name: 'Alex Thompson', position: 'CTO' },
      image: '/path/to/image2.png',
    },
    {
      title: 'Deliver Quality on Time and Within Budget',
      description: 'Our proven delivery model optimizes costs and maximizes efficiency, ensuring your projects are completed on time.',
      quote: 'They managed our project with precision and transparency, resulting in a successful launch.',
      author: { name: 'Sophia Redding', position: 'Product Manager' },
      image: '/path/to/image3.png',
    },
  ];

  return (
    <div className="building-software-section">
      <h1 className="section-title">Way of building <span>Great Software</span></h1>
      
      {sectionsData.map((section, index) => (
        <div key={index} className="software-item">
          <div className="content">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <blockquote>{section.quote}</blockquote>
            <div className="author">
              <strong>{section.author.name}</strong>
              <span>{section.author.position}</span>
            </div>
          </div>
          <div className="image">
            <img src={section.image} alt="Software development process" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildingSoftwareSection;
