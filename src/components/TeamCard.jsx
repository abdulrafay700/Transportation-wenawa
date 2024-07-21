import Card1 from  "../../src/images/p1.jpg"
import Card2 from  "../../src/images/p2.jpg"
import Card3 from  "../../src/images/p3.jpg"


function TeamSection(){
    return(
        <>
        <div className="container-fluid mb-5 pt-5 bg-gray">
            <div className="container my-5 pb-5">
                <div className="section-heading team-heading">
                    <h3>Best team</h3>
                </div>
                <div className="row mt-5 pt-5">
                    {/* card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="card-body">
                            <div className="card-img">
                                <img  src={Card1} alt="" srcset="" />
                            </div>
                            <div className="cardContent">                          
                                        <h4  className="primary-text">Susan Black</h4>
                                        <p className="text-center">SEO Founder</p>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col-lg-4 col-md-6  mt-4 mt-md-0" >
                        <div className="card-body">
                            <div className="card-img">
                                <img  src={Card2} alt="" srcset="" />
                            </div>
                            <div className="cardContent">                          
                                        <h4 className="primary-text">Joe Johnson</h4>
                                        <p  className="text-center">Co-Founder</p>
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
                                        <h4  className="primary-text">May Horton</h4>
                                        <p className="text-center">Marketer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TeamSection