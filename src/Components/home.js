
import './style.css'

export default function Home()
{
    return(<>
   
      <main>
        <section className="hero">
          <h2>The Signature Cakes and Stones</h2>
          <p>Indulge in our mouth-watering cakes made with the freshest ingredients.</p>
          <button>Order Now</button>
        </section>
       
      </main>
      <footer>
        <p>footer</p>
      </footer>
    
    </>);
}




// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import c2 from "../images/hero-bg.jpg"
// import c1 from "../images/i2.jpg"

// const HomeCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <div className="carousel-text">
//           <h2>Carousel Item 1</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//         <img src="https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80" alt="Carousel Image 1" width={800} height={550}
//         />
//       </div>
//       <div>
//         <div className="carousel-text">
//           <h2>Carousel Item 2</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//         <img src="c2" alt="Carousel Image 2" />
//       </div>
//       <div>
//         <div className="carousel-text">
//           <h2>Carousel Item 3</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//         <img src="/images/carousel/image3.jpg" alt="Carousel Image 3" />
//       </div>
//     </Slider>
//   );
// };

// export default HomeCarousel;
