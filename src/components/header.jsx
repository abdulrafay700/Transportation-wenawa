import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";

// social icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";


// images
import  mainlogo from "../images/logo-1.png";
import  carlogo from "../images/logo1.png";





  
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOPen, setIsMenuOpen] = useState(false)

    // for togleer
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOPen)
        console.log(isMenuOPen)  
      }

     

    //   for scrolling

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
            console.log(isScrolled)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

     
    

    return (

        <>
            <div className="header-wrapper">
             <div className="top-bar-header d-lg-block d-none">
            <div className="container  d-flex  justify-content-between">
            <p>Your Trusted 24 Hours Service Provider!</p>

                <ul className='d-flex align-items-center gap-4 mb-0"'>
                        <li><a href="#">< FaFacebookF/></a></li>
                        <li><a href="#">< FaTwitter/></a></li>
                        <li><a href="#">< FaLinkedinIn /></a></li>
                        <li><a href="#">< FaInstagram/></a></li>
                
                </ul>

            </div>
        </div>
        <div className="logo-header container  d-lg-flex d-none justify-content-between my-3">
                <div className='logo '>
                    <img src={mainlogo} alt="" />
                </div>

                <div className="header-info ">
                    <div className="row">
                        <div className="col-1 me-1">
                            <i className='icon-header'>< MdPhoneIphone/></i>
                        </div>
                        <div className="col-4 d-flex flex-column">
                            <strong>PHONE NUMBER</strong>
                                <span>0234-8765-9110</span>
                        </div>
                        <div className="col-1 me-1">
                            <i className='icon-header'>< LuMailOpen/></i>
                        </div>
                        <div className="col-4 d-flex flex-column">
                            <strong>EMAIL ADDRESS</strong>
                            <span>7xthemehelp@gamil.com</span>
                        </div>
                    </div>
                </div>
        </div>
        <header className={`container-fluid ${isScrolled?"ps-fixed":"ps-static"} py-2 d-flex align-items-center`}>
        <div className='d-xl-none d-lg-block' >
                    {/* <img src={logo} alt="" /> */}
            </div>
        <div className='container d-flex justify-content-xl-between justify-content-end'>
                   
                {/* navbar */}
                <nav className='col-7 d-flex align-items-center d-xl-flex d-none' >
                    
                    <ul className="d-flex align-items-center gap-5 ">
                        <li className="">
                            <a className ="" href="#" >HOME</a>
                        </li>
                        <li>
                            <a className ="" href="#" >PAGES</a>
                        </li>
                        <li>
                            <a className ="" href="#" >BlOGS</a>
                        </li>
                        <li>
                            <a className =""  href="#" >SHOPS</a>
                        </li>
                        <li>
                            <a className =""  href="#" >ELEMENTS</a>
                        </li>
                    </ul>
                </nav>

                {/* left side login buttons */}

                <div className='align-items-center gap-3  '>
                    <a className='icon-header-2 me-2' href="#"><FaShoppingCart /></a>
                    <a className='icon-header-2' href="#"><FaSearch /></a>
                
                </div>
            </div>

            {/* burger button controller */}
            <div  className="d-xl-none d-block" onClick={()=>toggleMenu()}>
                { isMenuOPen?(<FaXmark className='menu-icon'/>):(<RxHamburgerMenu className='menu-icon'
                      />)}
                    {/* <RxHamburgerMenu  className="menu-icon"/> */}
                      
            </div>
            {/* burger button controller end */}
        </header>
            </div>


        

        {/*===============mobile menu=============  */}
        <div className={`mobile-menu d-xl-none  ${isMenuOPen? "d-flex flex-column" : "d-none"}`}>
                <div className="close-btn icon" onClick={toggleMenu}>
                    <FaXmark />
                </div>

                        
                <ul className="d-flex flex-column  gap-5">
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a  href="#">PAGES</a>
                    </li>
                    <li>
                        <a  href="#">BLOGS</a>
                    </li>
                    <li>
                        <a  href="#">SHOP</a>
                    </li>
                    <li>
                        <a  href="#">ElEMENTES</a>
                    </li>
                </ul>
               
            </div>
            
        </>   
    );
}

export default Header;
