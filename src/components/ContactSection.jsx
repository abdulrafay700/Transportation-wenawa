import React from "react";
import Slider from "react-slick";

import conImg from "../../src/images/con-1.png"
import logo1 from "../../src/images/logo1.png"
import logo2 from "../../src/images/logo2.png"
import logo3 from "../../src/images/logo3.png"
import logo4 from "../../src/images/logo4.png"
import logo5 from "../../src/images/logo5.png"
import logo6 from "../../src/images/logo6.png"
import logo7 from "../../src/images/logo7.png"
import logo8 from "../../src/images/logo8.png"
  
function ContacatSection(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          }
        ]
    };

    return(
        <>
        <div className="container-fluid contact-section bg-image">
            <div className="container">
                <div className="row">
                    {/* left section */}
                    <div className="col-md-5 col-sm-12">
                        <div className="contact-form">
                            <div className="rotateside-contact">
                                <span>Contact Us</span>
                            </div>
                            <h2 className="mb-5 ">Contact Us</h2>
                            <form action="">
                                <input type="text" name="userName" className="form-control" placeholder="Name" />
                                <input type="text" name="email"  className="form-control" placeholder="Email" />
                                <input type="text" name="phone" className="form-control" placeholder="Phone" />
                                <input type="text" name="message" className="form-control" placeholder="Message" />
                                <input className="site-btn" type="button" value="submit" />
                            </form>
                        </div>
                    </div>

                    {/* righ section */}
                    <div className="col-md-7 ">
                        <div className="right-contantact-img ">
                            <img className="img-fluid" src={conImg} alt="contacat us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5">
                {/* logo carousel */}
            
                <div className="slider-container  client-carousel-logo">
                    <Slider {...settings}>
                        {/* logo 1 */}
                      <div className="client-logo">
                        <img src={logo1 } alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo2 } alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo3 } alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo4 } alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo5 } alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo6} alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo7} alt="" />
                      </div>

                      <div className="client-logo">
                        <img src={logo8} alt="" />
                      </div>
                   
                      
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default ContacatSection