import React, { useState } from 'react';
import './TechStackSection.css';

const TechStackSection = () => {
    const [activeTab, setActiveTab] = useState("Backend");

    const techStack = {
        Backend: [
            { name: "Node.js", logo: "path-to-nodejs-logo" },
            { name: "PHP", logo: "path-to-php-logo" },
            { name: "MySQL", logo: "path-to-mysql-logo" },
            { name: "Java", logo: "path-to-java-logo" },
            { name: ".NET Core", logo: "path-to-dotnet-logo" },
            { name: "Python", logo: "path-to-python-logo" },
            { name: "Ruby on Rails", logo: "path-to-rails-logo" },
            { name: "Go", logo: "path-to-go-logo" },
            { name: "MongoDB", logo: "path-to-mongodb-logo" }
        ],
        Frontend: [
            { name: "React", logo: "path-to-react-logo" },
            { name: "Angular", logo: "path-to-angular-logo" },
            { name: "Vue", logo: "path-to-vue-logo" },
            { name: "HTML5", logo: "path-to-html5-logo" },
            { name: "CSS3", logo: "path-to-css3-logo" }
        ],
        Databases: [
            { name: "PostgreSQL", logo: "path-to-postgresql-logo" },
            { name: "Oracle", logo: "path-to-oracle-logo" }
        ],
        CMS: [
            { name: "WordPress", logo: "path-to-wordpress-logo" },
            { name: "Drupal", logo: "path-to-drupal-logo" }
        ],
        CloudTesting: [
            { name: "AWS", logo: "path-to-aws-logo" },
            { name: "Azure", logo: "path-to-azure-logo" },
            { name: "Google Cloud", logo: "path-to-gcloud-logo" }
        ],
        DevOps: [
            { name: "Docker", logo: "path-to-docker-logo" },
            { name: "Kubernetes", logo: "path-to-kubernetes-logo" }
        ]
    };

    return (
        <div className="tech-stack-section">
            <h2>Our <span>Tech Stack</span></h2>
            <div className="tabs">
                {Object.keys(techStack).map(tab => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="logos">
                {techStack[activeTab].map(tech => (
                    <div key={tech.name} className="logo-item">
                        <img src={tech.logo} alt={tech.name} />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackSection;
