import React from 'react';
import { IoIosPlay } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Counter from './counter.jsx'; // Adjust the path as necessary

function VideoSection() {
  return (
    <section className="container-fluid video-section mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-5">
            <div className="video-col">
              <a href="#" className="video-playBtn">
                <i><IoIosPlay /></i>
              </a>
            </div>
          </div>
          <div className="col-md-12 col-lg-7 mt-md-5 mt-lg-0">
            <div className="shipment-wrap ">
              <h2 className="mb-3">We give you complete control of your shipment and help you.</h2>
              <p className='mb-3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, no when an unknown printer took a galley of type and scrambled.</p>
              <p className='mb-0'><i><FaCheckCircle /></i>Simply dummy text of the Lorem Ipsum is printing and type setting.</p>
              <p className='mb-0'><i><FaCheckCircle /></i>And typesetting industry Lorem Ipsum has been. Ipsum has been the.</p>
              <p className='mb-0'><i><FaCheckCircle /></i>Dummy text of the printing and typesetting industry. Text of the printing.</p>
              <a href="#" className="site-btn mt-2">Read More</a>
            </div>
            <div className="counter-section">
              <div className="row">
                {/* box1 */}
                <div className="col-md-5">
                  <div className="Box">
                    <div className="counterNumber">
                      <Counter end={450} duration={2000} />
                      <h4>Delivered Packages</h4>
                    </div>
                  </div>
                </div>

                {/* box2 */}
                <div className="col-md-5">
                  <div className="Box">
                    <div className="counterNumber">
                      <Counter end={45} duration={2000} />
                      <h4>Countries Covered</h4>
                    </div>
                  </div>
                </div>

                {/* box 3 */}
                <div className="col-md-5">
                  <div className="Box">
                    <div className="counterNumber">
                      <Counter end={670} duration={2000} />
                      <h4>Satisfied Clients</h4>
                    </div>
                  </div>
                </div>

                {/* box 4 */}
                <div className="col-md-5">
                  <div className="Box">
                    <div className="counterNumber">
                      <Counter end={1500} duration={6000} /> {/* Adjust end value as needed */}
                      <h4>Tons of Goods</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
