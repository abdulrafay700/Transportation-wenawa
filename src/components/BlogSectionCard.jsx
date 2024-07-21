import Card1 from  "../../src/images/pic13.jpg"
import Card2 from  "../../src/images/pic6.jpg"
import Card3 from  "../../src/images/pic12.jpg"
import { FaUser } from "react-icons/fa";
import { FaComment } from "react-icons/fa";


function BlogSection(){
    return(
        <>
        <div className="container-fluid my-5 pt-1">
            <div className="container my-5">
                <div className="section-heading blog-heading">
                    <h3>NEWS</h3>
                </div>
                <div className="row mt-5 pt-5">
                    {/* card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card-body">
                            <div className="card-img">
                                <img  src={Card1} alt="" srcset="" />
                            </div>
                            <div className="cardContent">
                                    <div className="post-info">
                                        <ul className="ps-0  border-bottom ">
                                            <li >
                                                <i className="primary-text"><FaUser/></i><a href="#" className="me-3">By John</a>
                                                <i className="primary-text"> <FaComment/></i><a href="#" >14 Comments</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <h4>A partnership based trust.</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <a className="site-btn" href="#"> Read More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col-lg-4 col-md-6  mt-4 mt-md-0">
                        <div className="card-body">
                            <div className="card-img">
                                <img  src={Card2} alt="" srcset="" />
                            </div>
                            <div className="cardContent">
                                    <div className="post-info">
                                    <ul className="ps-0  border-bottom ">
                                            <li >
                                                <i className="primary-text"><FaUser/></i><a href="#" className="me-3">By John</a>
                                                <i className="primary-text"> <FaComment/></i><a href="#" >14 Comments</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <h4>An anchor in a new era.</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <a className="site-btn" href="#"> Read More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* card3 */}
                    <div className="col-lg-4 col-md-6  mt-4 mt-md-0">
                        <div className="card-body">
                            <div className="card-img">
                                <img  src={Card3} alt="" srcset="" />
                            </div>
                            <div className="cardContent">
                                    <div className="post-info">
                                    <ul className="ps-0  border-bottom ">
                                            <li >
                                                <i className="primary-text"><FaUser/></i><a href="#" className="me-3">By John</a>
                                                <i className="primary-text"> <FaComment/></i><a href="#" >14 Comments</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <h4>Fueling your logistic chain.</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <a className="site-btn" href="#"> Read More</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogSection