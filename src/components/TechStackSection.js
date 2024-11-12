import React, { useState } from 'react';
import './TechStackSection.css';

const TechStackSection = () => {
    const [activeTab, setActiveTab] = useState("Backend");

    const techStack = {
        All: [
            { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" },
            { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
            { name: "MySQL", logo: "https://www.kreaweb.be/wp-content/uploads/2023/03/mysql.webp" },
            { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png" },
            { name: ".NET Core", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" },
            { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" },
            { name: "Ruby on Rails", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/800px-Ruby_On_Rails_Logo.svg.png" },
            { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" },
            { name: "MongoDB", logo: "https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png" },
            { name: "React", logo: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" },
            { name: "Angular", logo: "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png" },
            { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" },
            { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" },
            { name: "CSS3", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyh9iju0XvBgDQ76G8_JMrnQI-vOwXbB-2dA&s" },
            { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" },
            { name: "MongoDB", logo: "https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png" },
            { name: "WordPress", logo: "https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_640.png" },
            { name: "Drupal", logo: "https://drupalize.me/sites/default/files/styles/max_800w/public/page_images/wordmark2_blue_rgb.png?itok=QVdrDi8u" },
            { name: "WordPress", logo: "https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_640.png" },
            { name: "Drupal", logo: "https://drupalize.me/sites/default/files/styles/max_800w/public/page_images/wordmark2_blue_rgb.png?itok=QVdrDi8u" },
            { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png" },
            { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/800px-Microsoft_Azure.svg.png" },
            { name: "Google Cloud", logo: "https://yt3.googleusercontent.com/ytc/AIdro_n94STjDykDksYxhfE4RhM1BT4R2H69tIAHav8jrey03qQ=s900-c-k-c0x00ffffff-no-rj" },
            { name: "Docker", logo: "https://www.vikingsoftware.com/wp-content/uploads/2024/02/Docker.png" },
            { name: "Kubernetes", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScljZeTTpok-_etQTfk1Gb604ZdSn5jhOIsw&s" }
        
        
        ],
        Backend: [
            { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" },
            { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
            { name: "MySQL", logo: "https://www.kreaweb.be/wp-content/uploads/2023/03/mysql.webp" },
            { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png" },
            { name: ".NET Core", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" },
            { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" },
            { name: "Ruby on Rails", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/800px-Ruby_On_Rails_Logo.svg.png" },
            { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" },
            { name: "MongoDB", logo: "https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png" }
        ],
        Frontend: [
            { name: "React", logo: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" },
            { name: "Angular", logo: "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png" },
            { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" },
            { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" },
            { name: "CSS3", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyh9iju0XvBgDQ76G8_JMrnQI-vOwXbB-2dA&s" },
            
        ],
        Databases: [
            { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" },
            { name: "MongoDB", logo: "https://www.gtech.com.tr/wp-content/uploads/2020/09/mongodb-nedir-1.png" },
        
        ],
        CMS: [
            { name: "WordPress", logo: "https://cdn.pixabay.com/photo/2022/01/16/17/24/wordpress-6942722_640.png" },
            { name: "Drupal", logo: "https://drupalize.me/sites/default/files/styles/max_800w/public/page_images/wordmark2_blue_rgb.png?itok=QVdrDi8u" }
        
        ],
        CloudTesting: [
            { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png" },
            { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/800px-Microsoft_Azure.svg.png" },
            { name: "Google Cloud", logo: "https://yt3.googleusercontent.com/ytc/AIdro_n94STjDykDksYxhfE4RhM1BT4R2H69tIAHav8jrey03qQ=s900-c-k-c0x00ffffff-no-rj" }
        
        ],
        DevOps: [
            { name: "Docker", logo: "https://www.vikingsoftware.com/wp-content/uploads/2024/02/Docker.png" },
            { name: "Kubernetes", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScljZeTTpok-_etQTfk1Gb604ZdSn5jhOIsw&s" }
        
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
