import React, { useRef, useState } from 'react';
import './CompaniesSection.css';

const companyLogos = [
  'https://via.placeholder.com/150x50?text=Company+1',
  'https://via.placeholder.com/150x50?text=Company+2',
  'https://via.placeholder.com/150x50?text=Company+3',
  'https://via.placeholder.com/150x50?text=Company+4',
  'https://via.placeholder.com/150x50?text=Company+5',
  'https://via.placeholder.com/150x50?text=Company+6',
  'https://via.placeholder.com/150x50?text=Company+7',
];

function CompaniesSection() {
  const logosRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLogos = (direction) => {
    const containerWidth = logosRef.current.offsetWidth;
    const maxScroll = logosRef.current.scrollWidth - containerWidth;
    const newPosition = scrollPosition + (direction === 'next' ? containerWidth : -containerWidth);
    setScrollPosition(Math.max(0, Math.min(newPosition, maxScroll)));
  };

  return (
    <section className="companies-section">
      <div className="companies-header">
        <h3>Meet the People</h3>
        <h2>We are Working With</h2>
      </div>
      <div className="companies-slider">
        <button onClick={() => scrollLogos('prev')} className="slider-button prev">{'<'}</button>
        <div className="companies-logos" ref={logosRef} style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {companyLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Company ${index + 1}`} />
          ))}
        </div>
        <button onClick={() => scrollLogos('next')} className="slider-button next">{'>'}</button>
      </div>
    </section>
  );
}

export default CompaniesSection;
