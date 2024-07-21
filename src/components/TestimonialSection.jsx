// profile images

import pro1 from "../../src/images/profile img 1.jpg"
import pro2 from "../../src/images/profile img 2.jpg"
import pro3 from "../../src/images/profile img 3.jpg"

import React from "react";
import Slider from "react-slick";

function TestimonialSection(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
            <div className="container-fluid Testimonial-Section bg-color-overlay">
                <div className="container">
                    <div className="section-heading my-5">
                        <h3>Our Client Say</h3>
                    </div>

                    {/* testimonial Carousel */}
                    <div className="slider-container">
                        <Slider {...settings}>
                                {/* card1 */}
                            <div className="testimonial-box " >
                                <div className="testimonial-pic shadow">
                                    <img src={pro1} alt="profile picture" />
                                </div>
                                <div className="testimonial-content">
                                    <strong>Collis Ta'eed </strong>
                                    <span className="primary-text">Manager</span>
                                    <div className="qotation-mark"></div>
                                    <p> Excellent Customer support!.The template itself is very extended. simply dummy text of the printing and industry.</p>
                                </div>
                            </div>

                             {/* card2 */}
                             <div className="testimonial-box " >
                                <div className="testimonial-pic shadow">
                                    <img src={pro2} alt="profile picture" />
                                </div>
                                <div className="testimonial-content">
                                    <strong>John Doe </strong>
                                    <span className="primary-text">Manager</span>
                                    <div className="qotation-mark"></div>
                                    <p> Excellent Customer support!.The template itself is very extended. simply dummy text of the printing and industry.</p>
                                </div>
                            </div>


                             {/* card3 */}
                             <div className="testimonial-box " >
                                <div className="testimonial-pic shadow">
                                    <img src={pro3} alt="profile picture" />
                                </div>
                                <div className="testimonial-content">
                                    <strong>Marry Jane</strong>
                                    <span className="primary-text">Manager</span>
                                    <div className="qotation-mark"></div>
                                    <p> Excellent Customer support!.The template itself is very extended. simply dummy text of the printing and industry.</p>
                                </div>
                            </div>




                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TestimonialSection