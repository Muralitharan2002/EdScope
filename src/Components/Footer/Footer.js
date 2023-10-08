import React from 'react'
import { Link } from "react-scroll"
import '../Footer/footer.css'
import { FaInstagram } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaMeta } from 'react-icons/fa6'
import { FaXTwitter, FaGraduationCap } from 'react-icons/fa6'
// import { FaGraduationCap } from 'react-icons/fa6'


function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-title">
                    <div className="foot-title">
                        <FaGraduationCap className='footer-logo' />
                        <span className='foot-title1'>Ed</span>Scope
                    </div>


                    <div className="footer-slogan">
                        Getway To Your <br /> Knowledge Universe
                    </div>

                    <div className="social-media">
                        <FaXTwitter className='media-icon' />
                        <FaMeta className='media-icon' />
                        <FaLinkedinIn className='media-icon' />
                        <FaInstagram className='media-icon' />
                    </div>

                </div>
                {/* <div className="footer-content"> */}
                <div className="footer1">
                    <h3 className="footer-head">
                        Platform
                    </h3>

                    <nav className='footer-nav'>
                        <ul>
                            <li><Link className='footer-link' to="Home-section"
                                smooth={true}
                                duration={500}>Home</Link></li>
                            <li><Link className='footer-link' to="Weprovide-section"
                                smooth={true}
                                duration={500}>About us</Link></li>
                            <li><Link className='footer-link' to="Categories-section"
                                smooth={true}
                                duration={500}>Courses</Link></li>
                            <li><Link className='footer-link' to="Tutors-section"
                                smooth={true}
                                duration={500}>Tutors</Link></li>
                        </ul>
                    </nav>

                </div>
                <div className="footer1">
                    <h3 className="footer-head">
                        About Us
                    </h3>

                    <nav className='footer-nav'>
                        <ul>
                            <li><p className='footer-link'>Careers</p></li>
                            <li><p className='footer-link'>News & Blogs</p></li>
                            <li><p className='footer-link'>Countact us</p></li>
                        </ul>
                    </nav>


                </div>
                <div className="footer1">
                    <h3 className="footer-head">
                        Company
                    </h3>

                    <nav className='footer-nav'>
                        <ul>
                            <li><p className='footer-link'>Privacy Policy</p></li>
                            <li><p className='footer-link'>Terms & Conditions</p></li>
                            <li><p className='footer-link'>Cookie Preferences</p></li>
                        </ul>
                    </nav>


                </div>

                {/* </div> */}
            </div>
            <div className="copyright">
                <p>&copy; 2023 EdScope. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer