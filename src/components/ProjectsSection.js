import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Website Design for SCFC Canada",
      description: "Born out of a vision, a single-minded objective that puts service before anything else. SCFC Clearance and Forwarding Corp. surgically strives to deliver its valuable services, reshaping the logistics sector to serve modern needs and set a solid foundation for the shipping and freight forwarding industry.",
      imageUrl: "https://scmediagroup.com/wp-content/uploads/2019/07/bee-roofing-web-design-company.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile App Design for Health Tracker",
      description: "Designed an intuitive mobile application for tracking health metrics, including fitness, calorie intake, and sleep patterns. This app allows users to set goals, monitor their progress, and improve their health and well-being with a simple, user-friendly interface.",
      imageUrl: "https://cdn.dribbble.com/userupload/3899548/file/original-c50dad020660496d9a81d3762a4b00e6.png?resize=752x",
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Website for Local Fashion Brand",
      description: "A beautifully designed e-commerce platform tailored for a local fashion brand, showcasing their latest collections. The platform includes shopping cart functionality, user accounts, and payment gateway integration, offering a seamless shopping experience.",
      imageUrl: "https://assets.vogue.com/photos/5891c639dec09b18414539ca/master/w_2560%2Cc_limit/00-holding-style-com-launch.jpg",
      link: "#"
    }
  ];

  return (
    <section className="projects-section">
      <h2>Our Recent Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
