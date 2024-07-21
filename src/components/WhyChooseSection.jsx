import { useState } from "react";
import img1 from "../../public/images/bg1.jpg"
import img2 from "../../public/images/bg2.jpg"
import img3 from "../../public/images/bg3.jpg"
import img4 from "../../public/images/bg4.jpg"
import img5 from "../../public/images/bg5.jpg"
import img6 from "../../public/images/bg6.jpg"

// Icons
import { FaPeopleGroup } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { CgTime } from "react-icons/cg";
import { FaBusinessTime } from "react-icons/fa";





function ChooseUS() {
        const [bgImage, setBgImage] = useState(img1);
      
        const handleMouseEnter = (image) => {
          setBgImage(image);
        };
      
        const handleMouseLeave = () => {
          setBgImage(img1);
        };
    return (
        <>
            <div className="container-fluid pt-5 px-0">
            <div className="Choose-section"  style={{ backgroundImage: `url(${bgImage})`,  }}>
                <div className="container z-100 my-5 pb-5">
                    <div className="section-heading choose-heading">
                        <h3 className="white-text">Why Choose Us</h3>
                    </div>
                    <div className="row mt-5 pt-5 px-3 px-sm-0">
                        {/* card 1 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter(img1)}
                        onMouseLeave={handleMouseLeave}>

                            <div className="chose-box-wrapper">
                                <div className="welcome-icon"><i className="white-text">< FaPeopleGroup/></i></div>
                                
                                <h4>Customer Satisfication Tools</h4>
                                <p  className="white-text" >Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="col-lg-4 col-md-6 mt-4 "
                        onMouseEnter={() => handleMouseEnter(img2)}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                                <div className="welcome-icon"><i className="white-text"><TbReportAnalytics/></i></div>
                                <h4>Management & Reporting</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter(img3)}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                            <div className="welcome-icon"><i className="white-text"><MdPayments /></i></div>
                                
                                <h4>Freight Payment Options</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter(img4)}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                            <div className="welcome-icon"><i className="white-text"><AiOutlineSolution  /></i></div>
                                 
                                <h4>Compliance Solutions</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter(img5)}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                            <div className="welcome-icon"><i className="white-text">  < CgTime  /></i></div>
                               
                                <h4>Timely Delivery</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter(img6)}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                            <div className="welcome-icon"><i className="white-text"> <FaBusinessTime /></i></div>
                
                                <h4>24 / 7 Service</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </>
    );
}

export default ChooseUS;



