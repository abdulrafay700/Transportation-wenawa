import Carousel from 'react-bootstrap/Carousel';
import Slide1  from "../images/slide1.jpg"
import Slide2  from "../images/slide2.jpg"
import Slide3  from "../images/slide3.jpg"



const Carousels = () => {


  return (
    <>
    <div className='className="container-fluid carousel-section mx-0 p-0"'>
    <Carousel>
       {/* ==============================Card1======================================== */}
      <Carousel.Item>
                <div className=" carousel-img mx-0">
                  <img src={Slide1} alt="" />
                </div>
        <Carousel.Caption>
          <h2>FAST CARGO <span>SERVICES</span></h2>
          <div className="row mt-5">
          <p>Global turnkey logistics and transportation services via sea, land and air. We will protect you from risk.</p>
          <a className='site-btn ms-3' href="#">Read More</a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

       {/* ==============================Card2======================================== */}
      <Carousel.Item>
                <div className="carousel-img mx-0">
                  <img src={Slide2} alt="" />
                </div>
        <Carousel.Caption>
            <h2>WORLD CLASS <span>LOGESTIC</span></h2>
          <div className="row mt-5">
            <p>Global turnkey logistics and transportation services via sea, land and air. We will protect you from risk.</p>
            <a className='site-btn' href="#">Read More</a>
          </div>
        
        </Carousel.Caption>
      </Carousel.Item>

     {/* ==============================Card3======================================== */}
      <Carousel.Item>
                <div className="carousel-img mx-0">
                  <img src={Slide3} alt="" />
                </div>
  
        <Carousel.Caption>
            <h2>Fast Delivery <span>Service</span></h2>
          <div className="row mt-sm-1">
            <p>Global turnkey logistics and transportation services via sea, land and air. We will protect you from risk.</p>
            <a className='site-btn' href="#">Read More</a>
          </div>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
   
  );
};

export default Carousels









