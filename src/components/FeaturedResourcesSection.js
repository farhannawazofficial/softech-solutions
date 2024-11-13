import React from 'react';
import './FeaturedResourcesSection.css';

const FeaturedResourcesSection = () => {
    const resources = [
        {
            id: 1,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URLs
            link: "#",
        },
        {
            id: 2,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            imageUrl: "https://via.placeholder.com/300x200",
            link: "#",
        },
        {
            id: 3,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            imageUrl: "https://via.placeholder.com/300x200",
            link: "#",
        },
        {
            id: 4,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            imageUrl: "https://via.placeholder.com/300x200",
            link: "#",
        },
        {
            id: 5,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            imageUrl: "https://via.placeholder.com/300x200",
            link: "#",
        },
    ];

    return (
        <div className="featured-resources-section">
            <h2>Featured <span>Resources</span></h2>
            <div className="resources-scroll">
                {resources.map((resource) => (
                    <div key={resource.id} className="resource-card">
                        <img src={resource.imageUrl} alt={resource.title} className="resource-image" />
                        <h3 className="resource-title">{resource.title}</h3>
                        <a href={resource.link} className="read-more-link">
                            Read More <span className="arrow">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedResourcesSection;
