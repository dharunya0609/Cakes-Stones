import {useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';

import './order.css';

export default function Order()
{
        const navig=useNavigate();
        return(<>

            
            <div>
        <section className="features">
          <div className="feature">
            {/* <img src="https://images.unsplash.com/photo-1580745497986-76cbf3d259da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpcnRoZGF5JTIwY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Cake 1" /> */}
            <img src="https://content.jdmagicbox.com/comp/erode/c8/9999px424.x424.160908152949.b9c8/catalogue/the-signature-cakes-and-stones-erode-ho-erode-pastry-shops-1eglp4lm36.jpg" alt="Cake 1" />
  <h3>TABLE BOOKING</h3>
            <p>Book tables in prior to spend time</p>
            <Button variant="dark" onClick={()=>navig('/orderingform')}>Book Now</Button>
          </div>
          <div className="feature">
          <img src="https://media.istockphoto.com/id/1358090902/photo/grandma-celebrating-birthday.jpg?s=612x612&w=0&k=20&c=b0-3zc1WOCnx3cm2VVE6pZWpIMOVMD_C7ipWXkVPyVY=" alt="Cake 2" />
            <h3>EVENT BOOKING</h3>
            <p>Celebrate your special days.</p>
            <Button variant="dark" onClick={()=>navig('/eventform')}>BOOK NOW</Button>
          </div>
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Cake 3" />
            <h3>CAKE ORDERING</h3>
            <p>Order cakes to taste the difference.</p>
            <Button variant="dark" onClick={()=>navig('/cakeform')}>ORDER NOW </Button>
          </div>
        </section>
        
      </div>

</>)
}