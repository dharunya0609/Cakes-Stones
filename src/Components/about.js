import Iframe from 'react-iframe'
import './about.css';
export default function About()
{
    return(
        <>
            <div className="about">
                <h2>About Us</h2>
                <p>
                    We are a family-owned bakery located in the heart of the city. We have been
                    baking delicious cakes and pastries for over 25 years, and our passion for baking
                    has only grown stronger with time.
                </p>
                <p>
                    Our cakes are made from the finest ingredients, and we never compromise on quality.
                    We offer a wide variety of flavors and designs to suit every occasion, from birthdays
                    to weddings to corporate events.
                </p>
                <p>
                    At our bakery, we believe that every cake has a story to tell, and we love being a
                    part of our customers' special moments. Whether it's a small celebration or a grand
                    event, we are committed to making your cake a memorable one.
                </p>
                <h3 style={{textAlign:'left'}}>How to Reach us ?</h3>

                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002136.0045890221!2d77.07718184681616!3d11.14360221509623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f54bb8cf5df%3A0x9634dc4eda36a5c1!2sThe%20Signature%20Cakes%20%26%20Stones!5e0!3m2!1sen!2sin!4v1678870449557!5m2!1sen!2sin"
                        width="700px" height="500px"  display="block" position="relative"/>
                </div>
               
        </>
    )
}