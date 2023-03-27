import './style.css'
import backgroundImage from '../images/tasty.jpg';

export default function Home()
{
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };
    return(<>
   
      <main>
        <section className="hero" style={styles}>
                            <h1 className="title1">THE SIGNATURE</h1>
                            <h1 className="title2">Cakes & Stones</h1>
                            <h1 className="title3">TASTE THE DIFF</h1>
                            {/* <p>Indulge in our mouth-watering cakes made with the freshest ingredients.</p> */}
          <br/><button>Order Now</button>
        </section>
       
      </main>
      <footer>
        <p>footer</p>
      </footer>
    
    </>);
}


