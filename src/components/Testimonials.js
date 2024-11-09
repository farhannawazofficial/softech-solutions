import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Imran Khan',
    title: 'Software Engineer',
    review: 'Without any doubt, I recommend Softech Solutions as one of the best web design and digital marketing agencies.',
    image: 'https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWZiODA2ZjcwLTc0YWMtMTFlZi1hZjA3LTliZDRjMmZlZGU4Yi5qcGc=',
    rating: 5,
  },
  {
    name: 'Bill Gates',
    title: 'Marketing Manager, Janet Cosmetics',
    review: 'Softech Solutions provided exceptional service in developing our web presence. Highly recommended!',
    image: 'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x2667+0+0/resize/1100/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F82%2Ffb%2F62f7bcdd47329b5419411e9a7471%2Fbill-gates-portrait-at-npr.jpg',
    rating: 5,
  },
  {
    name: 'Mark Zuckerberg',
    title: 'CEO, Tech Innovators',
    review: 'Fantastic experience with Softech Solutions. They truly understand client needs.',
    image: 'https://media.vanityfair.com/photos/5cf71b7e5d0130aa612df063/master/pass/zuckerberg1.jpg',
    rating: 4,
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    nextArrow: <button className="arrow next">{'>'}</button>,
    prevArrow: <button className="arrow prev">{'<'}</button>,
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h3>Why Customers Love</h3>
        <h2>Working With Us</h2>
      </div>
      <div className="testimonials-content">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-review">“{testimonial.review}”</div>
              <div className="testimonial-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
