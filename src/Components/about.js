import Iframe from 'react-iframe';
import './about.css';
import img1 from "../images/about-img-1.jpeg";
import img2 from "../images/about-img-2.jpeg";

export default function About()
{
    return(
        <>
        <section class="about">
        <div class="container">
            <div class="row">
                <div class="description padding-right animate-left">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            Read
                        </h2>
                        <h3 class="headline headline-dark"><br/>Our Story</h3>
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                    <p>Our cakes are made from the finest ingredients, and we never compromise on quality.
                    We offer a wide variety of flavors and designs to suit every occasion, from birthdays
                    to weddings to corporate events.</p>
                    <p>We are a family-owned bakery located in the heart of the city. We have been
                    baking delicious cakes and pastries for over 25 years, and our passion for baking
                    has only grown stronger with time.</p>
                </div>
                <div class="image animate-right">
                    <img class="animate-top" src={img2} alt="bread"/>
                </div>   
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <div class="row">
                <div class="image padding-right margin-bottom animate-left">
                    <img src={img1} alt="bread"/>
                </div>
                <div class="description animate-right">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            Bread
                        </h2>
                        <h3 class="headline headline-dark"><br/>So Good</h3>
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                    <p>At our bakery, we believe that every cake has a story to tell, and we love being a
                    part of our customers' special moments. Whether it's a small celebration or a grand
                    event, we are committed to making your cake a memorable one.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
        <div class="container">
            <div class="row">
                <div class="description padding-right animate-left">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            Read
                        </h2>
                        <h3 class="headline headline-dark"><br/>Our Story</h3>
                        <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                    </div>
                    <p>Our cakes are made from the finest ingredients, and we never compromise on quality.
                    We offer a wide variety of flavors and designs to suit every occasion, from birthdays
                    to weddings to corporate events.</p>
                </div>
                <div class="image animate-right">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002136.0045890221!2d77.07718184681616!3d11.14360221509623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f54bb8cf5df%3A0x9634dc4eda36a5c1!2sThe%20Signature%20Cakes%20%26%20Stones!5e0!3m2!1sen!2sin!4v1678870449557!5m2!1sen!2sin"
                        width="700px" height="500px"  display="block" position="relative"/>
                </div>
            </div>
        </div>
    </section>
    {/* <section class="about">
        <div class="container">
            <div class="row">
                <div class="image padding-right margin-bottom animate-left">
                </div>
                <div class="description animate-right">
                    <div class="global-headline">
                        <h2 class="sub-headline">
                            Locate
                        </h2>
                        <h3 class="headline headline-dark"><br/>Us</h3>
                    </div>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002136.0045890221!2d77.07718184681616!3d11.14360221509623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f54bb8cf5df%3A0x9634dc4eda36a5c1!2sThe%20Signature%20Cakes%20%26%20Stones!5e0!3m2!1sen!2sin!4v1678870449557!5m2!1sen!2sin"
                        width="700px" height="500px"  display="block" position="relative"/>
                </div>
            </div>
        </div>
    </section> */}
            {/* <div className="about">
                {/* <h2>About Us</h2>
                <div class="global-headline">
                        <h2 class="sub-headline">
                            Read
                        </h2>
                        <h3 class="headline headline-dark">Our Story</h3>
                    </div>
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
                </div> */}
        </>
    )
}