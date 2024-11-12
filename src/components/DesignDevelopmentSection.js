import React from 'react';
import './DesignDevelopmentSection.css';

const DesignDevelopmentSection = () => {
  const approaches = [
    {
      icon: '🔧', // You can replace with an icon path or a specific YouTube icon
      title: 'UX Driven Engineering',
      description: 'Unlike other companies, we are a UX first development company. Projects are driven by designers, and they make sure design and experiences translate to code.',
    },
    {
      icon: '🤝',
      title: 'Developing Shared Understanding',
      description: 'Projects are driven by designers and they make sure design and experiences translate to code.',
    },
    {
      icon: '🌟',
      title: 'Proven Experience and Expertise',
      description: 'Our experience in the field guarantees a smooth process and high-quality results.',
    },
    {
      icon: '🔒',
      title: 'Security & Intellectual Property (IP)',
      description: 'We prioritize security and protect intellectual property rights in every project.',
    },
    {
      icon: '🛠️',
      title: 'Code Reviews',
      description: 'Our code review process ensures quality and consistency in every project.',
    },
    {
      icon: '✅',
      title: 'Quality Assurance & Testing',
      description: 'Our QA team thoroughly tests each project to ensure reliability and quality.',
    },
  ];

  return (
    <div className="design-development-section">
      <h2>Our design and <span>development approach</span></h2>
      <div className="approach-grid">
        {approaches.map((approach, index) => (
          <div key={index} className="approach-card">
            <div className="icon">{approach.icon}</div>
            <h3>{approach.title}</h3>
            <p>{approach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignDevelopmentSection;
