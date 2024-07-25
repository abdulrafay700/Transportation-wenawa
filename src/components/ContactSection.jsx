import conImg from "../../src/images/con-1.png"

function ContacatSection(){
    return(
        <>
        <div className="container-fluid contact-section">
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
                    <div className="col-md-7 bg-image">
                        <div className="right-contantact-img ">
                            <img className="img-fluid" src={conImg} alt="contacat us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContacatSection