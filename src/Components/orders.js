// import React, { useState } from "react";
// import './order.css'
// function Ordering() {
//   const [tableNumber, setTableNumber] = useState("");
//   const [selectedCake, setSelectedCake] = useState("");
//   const [selectedCakeQuantity, setSelectedCakeQuantity] = useState(1);
//   const [orderSubmitted, setOrderSubmitted] = useState(false);

//   const handleTableNumberChange = (event) => {
//     setTableNumber(event.target.value);
//   };

//   const handleCakeSelection = (event) => {
//     setSelectedCake(event.target.value);
//   };

//   const handleCakeQuantityChange = (event) => {
//     setSelectedCakeQuantity(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Code for submitting the order goes here
//     setOrderSubmitted(true);
//   };

//   return (
//     <div className="ordering">
//       <h2>Order for Tables and Cakes</h2>
//       {orderSubmitted ? (
//         <p>Thank you for your order!</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Table Number:
//             <input
//               type="text"
//               value={tableNumber}
//               onChange={handleTableNumberChange}
//             />
//           </label>
//           <br />
//           <label>
//             Select a Cake:
//             <select value={selectedCake} onChange={handleCakeSelection}>
//               <option value="">-- Please Select --</option>
//               <option value="chocolate">Chocolate Cake</option>
//               <option value="vanilla">Vanilla Cake</option>
//               <option value="red-velvet">Red Velvet Cake</option>
//             </select>
//           </label>
//           <br />
//           <label>
//             Cake Quantity:
//             <input
//               type="number"
//               min="1"
//               max="10"
//               value={selectedCakeQuantity}
//               onChange={handleCakeQuantityChange}
//             />
//           </label>
//           <br />
//           <button type="submit">Submit Order</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Ordering;
import React from 'react';
import "./order.css";
import i1 from "../images/home_img.jpg";

import Tableform from "./tableForm";
  export default function Orders() 
  {
    
    const handleClick = () => {
        // Call the function in AnotherComponent
        Tableform.table();
    }
    return (
      <div>
        <section className="orders">
          <div className="order">
            <img src={i1} alt="Cake 1" />
            <h3>Event Booking</h3>
            <p>Birthday parties</p>
            <button onClick={handleClick}>Order Now</button>
          </div>
          <div className="order">
            <img src="https://images.unsplash.com/photo-1613452707901-21b3fd7f7e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwJTIwY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Cake 2" />
            <h3>Table Booking</h3>
            <p>Our cupcakes are the perfect treat for any time of the day.</p>
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



