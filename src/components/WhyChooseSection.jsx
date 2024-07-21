import { useState } from "react";


function ChooseUS() {
        const [bgImage, setBgImage] = useState(("../../src/images/bg1.jpg"));
      
        const handleMouseEnter = (image) => {
          setBgImage(image);
        };
      
        const handleMouseLeave = () => {
          setBgImage(("../../src/images/bg1.jpg"));
        };
    return (
        <>
            <div className="container-fluid mb-5 pt-5 px-0">
            <div className="Choose-section"  style={{ backgroundImage: `url(${bgImage})`,  }}>
                <div className="container z-100 my-5 pb-5">
                    <div className="section-heading choose-heading">
                        <h3 className="white-text">Why Choose Us</h3>
                    </div>
                    <div className="row mt-5 pt-5">
                        {/* card 1 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter("../../src/images/bg1.jpg")}
                        onMouseLeave={handleMouseLeave}>

                            <div className="chose-box-wrapper">
                                <h4>Customer Satisfication Tools</h4>
                                <p  className="white-text" >Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="col-lg-4 col-md-6 mt-4 "
                        onMouseEnter={() => handleMouseEnter("../../src/images/bg2.jpg")}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                                <h4>Management & Reporting</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter("../../src/images/bg3.jpg")}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                                <h4>Freight Payment Options</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter("../../src/images/bg4.jpg")}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                                <h4>Compliance Solutions</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter("../../src/images/bg5.jpg")}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
                                <h4>Timely Delivery</h4>
                                <p  className="white-text">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="col-lg-4 col-md-6 mt-4"
                        onMouseEnter={() => handleMouseEnter("../../src/images/bg6.jpg")}
                        onMouseLeave={handleMouseLeave}>
                            <div className="chose-box-wrapper">
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



