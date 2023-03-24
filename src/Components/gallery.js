
import "./gallery.css";
import i1 from "../images/home_img.jpg";


  export default function Card() 
  {
  
    return (
      <div>
        <section className="features">
          <div className="feature">
            <img src={i1} alt="Cake 1" />
            <h3>Custom Cakes</h3>
            <p>We can create any cake of your dreams for your special occasion.</p>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1613452707901-21b3fd7f7e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwJTIwY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Cake 2" />
            <h3>Cupcakes</h3>
            <p>Our cupcakes are the perfect treat for any time of the day.</p>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1600730493985-d1efe3d85ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Cake 3" />
            <h3>Cake Pops</h3>
            <p>Our cake pops are perfect for party favors or a sweet treat.</p>
          </div>
        </section>
        
      </div>
    );
  }



