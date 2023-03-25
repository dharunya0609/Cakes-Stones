// import React, { useState } from 'react';

// export default function Form() {
//   const [cakeType, setCakeType] = useState('');
//   const [cakeSize, setCakeSize] = useState('');
//   const [cakeFlavor, setCakeFlavor] = useState('');
//   const [cakeFrosting, setCakeFrosting] = useState('');
//   const [cakeMessage, setCakeMessage] = useState('');

//   const handleCakeTypeChange = (event) => {
//     setCakeType(event.target.value);
//   };

//   const handleCakeSizeChange = (event) => {
//     setCakeSize(event.target.value);
//   };

//   const handleCakeFlavorChange = (event) => {
//     setCakeFlavor(event.target.value);
//   };

//   const handleCakeFrostingChange = (event) => {
//     setCakeFrosting(event.target.value);
//   };

//   const handleCakeMessageChange = (event) => {
//     setCakeMessage(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Cake Type:', cakeType);
//     console.log('Cake Size:', cakeSize);
//     console.log('Cake Flavor:', cakeFlavor);
//     console.log('Cake Frosting:', cakeFrosting);
//     console.log('Cake Message:', cakeMessage);
//     // Send form data to server or perform other actions here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="cakeType">Cake Type:</label>
//         <select id="cakeType" value={cakeType} onChange={handleCakeTypeChange}>
//           <option value="">Select a cake type</option>
//           <option value="chocolate">Chocolate</option>
//           <option value="vanilla">Vanilla</option>
//           <option value="strawberry">Strawberry</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="cakeSize">Cake Size:</label>
//         <select id="cakeSize" value={cakeSize} onChange={handleCakeSizeChange}>
//           <option value="">Select a cake size</option>
//           <option value="6-inch">6 inch</option>
//           <option value="8-inch">8 inch</option>
//           <option value="10-inch">10 inch</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="cakeFlavor">Cake Flavor:</label>
//         <input id="cakeFlavor" type="text" value={cakeFlavor} onChange={handleCakeFlavorChange} />
//       </div>
//       <div>
//         <label htmlFor="cakeFrosting">Cake Frosting:</label>
//         <input id="cakeFrosting" type="text" value={cakeFrosting} onChange={handleCakeFrostingChange} />
//       </div>
//       <div>
//         <label htmlFor="cakeMessage">Cake Message:</label>
//         <input id="cakeMessage" type="text" value={cakeMessage} onChange={handleCakeMessageChange} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default function Form()
{
    return(
        <>
        <h1>hello</h1>
        </>
    );
}