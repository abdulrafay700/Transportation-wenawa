import Trucker from "../../src/images/truck-2.png"
import Tyre from "../../src/images/rotate-tyer.png"
import LightBlink from "../../src/images/light-blink.png"
import OwlCarousel from "../../src/components/Assets/OwlCarousel.jsx"
function service(){
    return(
        <>
        <div className="container-fluid service-section bg-secondary pt-5">
            <div className="container pt-5">
                <div className="service-content">
                    <h2>Since <span>10 years</span> we are providing you some special services.</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur adipiscing elit, sed doeius mod tempor sed do eiusmod</p>
                </div>

                    <div className="owl mt-5">
                    <OwlCarousel/>
                    </div>
                    <div className="text-center mt-5">
                    <a href="#" className="site-btn">VIEW  GALERY</a>
                    </div>
            </div>

            <div className="trucker-mover d-none d-lg-block">
                    <img src={Trucker} alt="" />
                    {/* tyre */}
                    <div className="tyrePosition">
                        <img src={Tyre} alt="" />
                    </div>
                        {/* light blinl */}
                    <div className="LightBlinker">
                        <img src={LightBlink} alt="" />
                    </div>
              
            </div>
            
        </div>
        </>
    )
}

export default service