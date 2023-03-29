
import Payment from "../Components/payment"

export default function order()
{
  return(<>
  <h1>Ordering Cakes Form</h1>
  <form 
  method="POST">
        <label>
          Name:
          <input type="text" name="title" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
       
        <label>
          Content:
          <textarea name="content" />
        </label>
        <Payment/>
       


  </form>
  
  
  </>)
}