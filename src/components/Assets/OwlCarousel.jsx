import p1 from "../../../src/images/pic1.jpg"
import p2 from "../../../src/images/pic2.jpg"
import p3 from "../../../src/images/pic3.jpg"
import p4 from "../../../src/images/pic4.jpg"
import p5 from "../../../src/images/pic5.jpg"
import p6 from "../../../src/images/pic6.jpg"
import p7 from "../../../src/images/pic7.jpg"
import p8 from "../../../src/images/pic8.jpg"

import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container service-owl">
      <Slider {...settings}>
        <div className="owl-card">
            {/* card 1 */}
         <img src={p1} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Less than truckload</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>

        {/* card 2 */}
          <div className="owl-card">
            <img src={p2} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Trucking & Warehousing</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
            
        </div>

        {/* card 3 */}
        <div className="owl-card">
            <img src={p3} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Sea Delivery</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>


    {/* car 4 */}
        <div className="owl-card">
            <img src={p4} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Logistic Services</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>

        {/* car5 */}
        <div className="owl-card">
            <img src={p5} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Ground Shipping</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>


        {/* card 6 */}
        <div className="owl-card">
            <img src={p6} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">International Air Freight</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>

        {/* card 7 */}
        <div className="owl-card">
            <img src={p7} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Rail Shipping</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>

        {/* card 8 */}
        <div className="owl-card">
            <img src={p8} alt="" />
            <div className="owl-card-overlay">
                <div className="overlay-content px-5">
                    <h4 class="mt-0 mb-1 primary-text">Frost Shipping</h4>
                    <p class="mb-1 white-text">Imagination… What we can easily see is only a small percentage of what is possible</p>
                    <a class="site-btn" href="#">Read More</a>
                </div>
            </div>
        </div>


     
       
        
    
        
      </Slider>
    </div>
  );
}

export default Responsive;
