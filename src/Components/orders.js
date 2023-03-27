import React, { useState } from "react";
 import "./order.css";
  import i1 from "../images/home_img.jpg";
  import {Link} from 'react-router-dom';

import Form from './form.js';
 import Table from "./table";
export default function Orders() 
{
  const [showTableForm, setTableForm] = useState(false);
  const handleButtonClick = () => {
    setTableForm(true);
  };
    return (
      <div>
        <section className="orders">
          <div className="order">
            <img src={i1} alt="Cake 1" />
            <h3>Event Booking</h3>
            <p>Birthday parties</p>
            <Link to="/table" className="btn btn-primary">Sign up</Link>
            {/* <button onClick={handleButtonClick}>Order Now</button>
            {showTableForm && <TableForm/>} */}
            {/* <button onClick={TableForm} >Order Now</button> */}
          </div>
          <div className="order">
            <img src="https://images.unsplash.com/photo-1613452707901-21b3fd7f7e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwJTIwY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Cake 2" />
            <h3>Table Booking</h3>
            <p>Our cupcakes are the perfect treat for any time of the day.</p>
            <a href={<form/>} class="btn btn-danger">Order Now</a>
          </div>
          <div className="order">
            <img src="https://images.unsplash.com/photo-1600730493985-d1efe3d85ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Cake 3" />
            <h3>Cake Ordering</h3>
            <p>Book cakes of your choice</p>
          </div>
        </section>
        
      </div>
    );
  }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Tableform from './tableform';
// const Orders = (props) => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <h1>Home Page</h1>
//       <p>Go to the contact page by using one of the following:</p>
//       <hr />

//       {/* Button */}
//       <p>
//         <button onClick={() => navigate("/tableform")}>Go to Contact</button>
//       </p>

//       {/* Checkbox */}
//       <p>
//         <input
//           type="checkbox"
//           onChange={() => navigate("/tableform")}
//         ></input>
//         <span>Check this checkbox to go to the contact page</span>
//       </p>

//       {/* Text field */}
//       <p>
//         <input
//           type="text"
//           onChange={(e) => {
//             if (e.target.value === "tableform") {
//               navigate("/tableform");
//             }
//           }}
//           placeholder="Enter 'tableform' to navigate"
//         ></input>
//       </p>
//     </>
//   );
// };

// export default Orders;