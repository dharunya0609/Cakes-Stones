export default function order()
{
  return(<>
  <h1>Event Form</h1>
  <form action="https://formspree.io/f/mvonbdyy"
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
        <button type="submit">Submit</button>


  </form>
  
  
  </>)
}