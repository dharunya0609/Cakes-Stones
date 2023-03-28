import React,{useState} from "react"

export default function Payment()
{
    const [amt,setAmt]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(amt==="")
          alert("Please enter amount");
        
          else{
            var options = {
              key: "rzp_test_5yo1Hi3PSmmAFj",
              key_secret:"MxnZmZOMN8dswubRO4IJXx5l",
              amt: amt *100,
              currency:"INR",
              name:"STARTUP_PROJECTS",
              description:"for testing purpose",
              handler: function(response){
                alert(response.razorpay_payment_id);
              },
              prefill: {
                name:"Dharunya",
                email:"dharunyaramesh800@gmail.com",
                contact:"9361080079"
              },
              notes:{
                address:"Razorpay Corporate office"
              },
              theme: {
                color:"#3399cc"
              }
            };
            var pay = new window.Razorpay(options);
            pay.open();
          }
    }



    return(<>
    <h2>RazorPay Payment Integration</h2>
    <br/>
    <input type="text" placeholder="Enter amount" value={amt} onChange={(e)=>setAmt(e.target.value)}/>
    <br/><br/>
    <button onClick={handleSubmit}>Submit</button>
    
    
    
    </>)
}