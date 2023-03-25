import React, { useState } from "react";
import './order.css'
function TableForm() {
 
      
      const [tableNumber, setTableNumber] = useState("");
   const [selectedCake, setSelectedCake] = useState("");
   const [selectedCakeQuantity, setSelectedCakeQuantity] = useState(1);
   const [orderSubmitted, setOrderSubmitted] = useState(false);

   const handleTableNumberChange = (event) => {
    setTableNumber(event.target.value);
  };

  const handleCakeSelection = (event) => {
    setSelectedCake(event.target.value);
  };

  const handleCakeQuantityChange = (event) => {
    setSelectedCakeQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code for submitting the order goes here
    setOrderSubmitted(true);
  };

  return (
    <div className="ordering">
      <h2>Order for Tables and Cakes</h2>
      {orderSubmitted ? (
        <p>Thank you for your order!</p>
      ) : (
        // 
        <form action="https://formspree.io/f/mvonbdyy"
  method="POST">
          <label>
            Table Number:
            <input
              type="text"
              value={tableNumber}
              onChange={handleTableNumberChange}
            />
          </label>
          <br />
          <label>
            Select a Cake:
            <select value={selectedCake} onChange={handleCakeSelection}>
              <option value="">-- Please Select --</option>
              <option value="chocolate">Chocolate Cake</option>
              <option value="vanilla">Vanilla Cake</option>
              <option value="red-velvet">Red Velvet Cake</option>
            </select>
          </label>
          <br />
          <label>
            Cake Quantity:
            <input
              type="number"
              min="1"
              max="10"
              value={selectedCakeQuantity}
              onChange={handleCakeQuantityChange}
            />
          </label>
          <br />
          <button type="submit">Submit Order</button>
        </form>
      )}
    </div>
  );
    
}

export default TableForm;
