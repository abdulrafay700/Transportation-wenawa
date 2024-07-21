import pro1 from "../../src/images/profile img 1.jpg";
import pro2 from "../../src/images/profile img 2.jpg";
import pro3 from "../../src/images/profile img 3.jpg";

import React from "react";
import Slider from "react-slick";

// Make sure you import the slick-carousel CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function TestimonialSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          }
        ]
    };
    return (
        <div className="container-fluid Testimonial-Section bg-color-overlay">
            <div className="container">
                <div className="section-heading my-5">
                    <h3>Our Client Say</h3>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="testimonial-box">
                            <div className="testimonial-pic shadow">
                                <img src={pro1} alt="profile picture" />
                            </div>
                            <div className="testimonial-content">
                                <strong>Collis Ta'eed </strong>
                                <span className="primary-text">Manager</span>
                                <div className="qotation-mark"></div>
                                <p>Excellent Customer support! The template itself is very extended. Simply dummy text of the printing and industry.</p>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="testimonial-pic shadow">
                                <img src={pro2} alt="profile picture" />
                            </div>
                            <div className="testimonial-content">
                                <strong>John Doe </strong>
                                <span className="primary-text">Manager</span>
                                <div className="qotation-mark"></div>
                                <p>Excellent Customer support! The template itself is very extended. Simply dummy text of the printing and industry.</p>
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <div className="testimonial-pic shadow">
                                <img src={pro3} alt="profile picture" />
                            </div>
                            <div className="testimonial-content">
                                <strong>Marry Jane</strong>
                                <span className="primary-text">Manager</span>
                                <div className="qotation-mark"></div>
                                <p>Excellent Customer support! The template itself is very extended. Simply dummy text of the printing and industry.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
