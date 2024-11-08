import React from 'react';
import './TrustSection.css';

function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-content">
        <h3>Leading companies trust us</h3>
        <h2>to develop software</h2>
        <p>
          We <span className="highlight">add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
        </p>
        <a href="#more-info" className="more-info-link">
          See more Information <span>→</span>
        </a>
      </div>
      <div className="trust-video">
        <iframe
        width="560" 
        height="315"
          src="https://www.youtube.com/embed/eI4yIoUxFxA?si=zkEcQi9M1OTYauWi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default TrustSection;
