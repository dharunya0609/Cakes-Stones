

// export default function Home()
// {
//     return(<>
   
//       <main>
//         <section className="hero">
//           <h2>The Signature Cakes and Stones</h2>
//           <p>Indulge in our mouth-watering cakes made with the freshest ingredients.</p>
//           <button>Order Now</button>
//         </section>
       
//       </main>
//       <footer>
//         <p>&copy; 2023 Delicious Cakes. All rights reserved.</p>
//       </footer>
    
//     </>);
// }

import React, { useState, useEffect } from "react";
import "./style.css";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // The images and text for the carousel
  const slides = [
    {
      image: "cake1.jpg",
      text: "Freshly Baked Cakes"
    },
    {
      image: "cake2.jpg",
      text: "Delicious Cupcakes"
    },
    {
      image: "cake3.jpg",
      text: "Customized Cakes for Every Occasion"
    }
  ];

  // Move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="home-container">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${slideIndex === index ? "active" : ""}`}
            key={index}
          >
            <img src={slide.image} alt="cake" />
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
