import { GiCommercialAirplane } from "react-icons/gi";
import { GiCargoShip } from "react-icons/gi";
import { BsTruckFront } from "react-icons/bs";
import { GiForklift } from "react-icons/gi";
import DeliverBoy from "../../src/images/truck.png"


function WelcomeSection(){
    return (
        <section className="welcome-section pb-5 py-5 ">
        <div className="container mt-5">
            <div className="section-heading ">
                <h3>Transport Company</h3>
            </div>

            <div className="section-content mt-5">
                <div className="row align-items-center mt-5 ">
                    <div className="col-lg-4 col-md-6 mt-5">
                        <div className="welcomeBox p-4 d-flex ">
                            <div className="welcome-icon">
                                <i><BsTruckFront /></i>
                            </div>
                            <div className="icon-content">
                                    <h4 className="mb-3">
                                        <a href="#">Road Freight</a>
                                    </h4>
                                    <p>Go beyond logistics, make the world go round and business.</p>
                                </div>
                        </div>

                        <div className="welcomeBox mt-5">
                        <div className="welcomeBox p-4 d-flex hover-border-outer">
                            <div className="welcome-icon">
                                <i><GiCommercialAirplane/></i>
                            </div>
                            <div className="icon-content ">
                                    <h4 className="mb-3">
                                        <a href="#">Air Freight</a>
                                    </h4>
                                    <p>Go beyond logistics, make the world go round and business.</p>
                                </div>
                        </div>
                        </div>
                    </div>
                    
                    {/* second col */}
                    <div className="col-lg-4 col-md-6 mt-5">
                        <img className="img-fluid" src={DeliverBoy} alt="" />
                    </div>

                    <div className="col-lg-4 col-md-12 mt-5">
                    <div className="welcomeBox p-4 d-flex hover-border-outer">
                            <div className="welcome-icon">
                                <i><GiCargoShip  /></i>
                            </div>
                            <div className="icon-content ">
                                    <h4 className="mb-3">
                                        <a href="#">Sea Freight</a>
                                    </h4>
                                    <p>Go beyond logistics, make the world go round and business.</p>
                                </div>
                        </div>

                        <div className="welcomeBox mt-5 p-4 d-flex hover-border-outer">
                            <div className="welcome-icon ">
                                <i><GiForklift /></i>
                            </div>
                            <div className="icon-content ">
                                    <h4 className="mb-3">
                                        <a href="#">Warehouse</a>
                                    </h4>
                                    <p>Go beyond logistics, make the world go round and business.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}


export default WelcomeSection