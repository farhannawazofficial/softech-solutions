import React from 'react';
import Slider from 'react-slick';
import './Services.css';

const services = [
 
  {
    icon: '💻',
    title: 'Web Design & Development',
    description: 'A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
 
  {
    icon: '🎨',
    title: 'Graphic Design',
    description: 'A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
  
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.',
  
  },
  {
    icon: '🛠️',
    title: 'Software Testing Service',
    description: 'A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.',
  
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'A website is an extension of yourself and we can help you express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
];

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="services">
      <h2>Services we offer</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Services;
