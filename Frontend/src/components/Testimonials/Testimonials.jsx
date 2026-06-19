import React from "react";
import { Carousel, Rate } from "antd";
// import "antd/dist/reset.css";
import "./Testimonials.css";
import serviceBg from '../../assets/3780749_77848.jpg'
import img1 from "../../assets/20.avif"
import img2 from "../../assets/21.avif"
import img3 from "../../assets/22.jpg"

const testimonials = [
  {
    id: 1,
    name: "John Matthews",
    role: "Operations Manager",
    rating: 4,
           image: img1,
  
    message: "Matrix Industries improved our workflow efficiency significantly."
  },
  {
    id: 2,
    name: "Sarah Collins",
    role: "Project Lead",
    rating: 4,
         image: img2,
    
    message: "Their execution quality and engineering support is excellent."
  },
  {
    id: 3,
    name: "David Brown",
    role: "Plant Supervisor",
    rating: 4,
         image: img3,
    
    message: "Delivered scalable automation that boosted productivity."
  },
   {
    id: 2,
    name: "Sarah Collins",
    role: "Project Lead",
    rating: 5,
         image: img2,
    
    message: "Their execution quality and engineering support is excellent."
  },
  {
    id: 3,
    name: "David Brown",
    role: "Plant Supervisor",
    rating: 5,
         image: img1,
    
    message: "Delivered scalable automation that boosted productivity."
  }
];

const Testimonials = () => {
  return (
    <section className="antd-testimonials"
     style={{ backgroundImage: `url(${serviceBg})`}}
         id="services">

      <h2>Client Testimonials</h2>

      <Carousel
        autoplay
        autoplaySpeed={2000}
        dots={true}
        infinite
        loop
        // effect="fade"
        // id="c"
      >
        {testimonials.map((t) => (
          <div key={t.id}>
            <div className="testimonial-card">
              <img src={t.image} alt={t.name} id="RImage"/>

              <Rate disabled value={t.rating} /> 
             <p>"{t.message}"</p>
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </Carousel>

    </section>
  );
};

export default Testimonials;