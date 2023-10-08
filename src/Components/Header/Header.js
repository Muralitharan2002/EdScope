import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { ImSearch } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'

import "./header.css";

function Header() {
    const [setNav, setmobileNav] = useState(false)
    const [setSearch, setSearchbar] = useState(false)
    const [isSticky, setSticky] = useState(false);

    // *****MOBILE-bar*******
    const toggleMobileMenu = () => {
        const MobileMenu = document.getElementById('hamburger')
        MobileMenu.classList.toggle("active");

        setmobileNav(!setNav)
    }

    // *****SEARCH BAR - FEILD*******
    const explore_open = () => {
        setSearchbar(!setSearch)
        document.getElementById("search1").classList.add("active");

    }
    const explore_close = () => {
        document.getElementById("search1").classList.remove("active");
        setSearchbar(!setSearch)
    }

    // *****when scroll down navbar shadow appears *******
    const handleScroll = () => {
        if (window.scrollY > 0) { // set sticky after 50px of scroll
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);



    return (
        <>
            <div className={`header ${isSticky ? 'sticky-shadow' : ''}`}>
                <div className="title" id='title'>
                    <FaGraduationCap className='logo' />
                    <span className='title-hl'>Ed</span>Scope
                </div>

                <nav className="navbar ">
                    <ul className={setNav ? "nav-field active" : "nav-field"}>
                        <li className="nav-item"><Link className='link' to="Home-section"
                            spy={true}
                            // exact="true"
                            offset={-130}
                            activeClass="active-link"
                            smooth={true}
                            duration={500}>Home</Link></li>
                        <li className="nav-item"><Link className='link' to="Categories-section"
                            spy={true}
                            offset={50}
                            // exact={true}
                            activeClass="active-link"
                            smooth={true}
                            duration={500}>Courses</Link></li>
                        <li className="nav-item"><Link className='link' to="Tutors-section"
                            spy={true}
                            // exact="true"
                            offset={50}
                            activeClass="active-link"
                            smooth={true}
                            duration={500}>Tutors</Link></li>
                        <li className="nav-item"><Link className='link' to="contact-section"
                            spy={true}
                            // exact="true"
                            offset={-110}
                            activeClass="active-link"
                            smooth={true}
                            duration={500}>Contact</Link></li>
                        <li className="nav-item"><Link className='link' to="Weprovide-section"
                            spy={true}
                            // exact="true"
                            activeClass="active-link"
                            smooth={true}
                            duration={500}>About</Link></li>
                    </ul>
                </nav>




                <div className="explore" id='ex'>
                    <div className="explorebtn" onClick={explore_open}>
                        <ImSearch />
                    </div>
                </div>
                <div className="container">
                    <div className='hamburger' id='hamburger' onClick={toggleMobileMenu}>
                        <div className='bar one'></div>
                        <div className='bar two'></div>
                        <div className='bar three'></div>
                    </div>
                </div>
            </div>
            <div className="search" id='search1'>
                <div className="glassfield">

                    <ImSearch className="search-glass" />

                    <input type='text' className="search-field" placeholder='find best course' />

                    <div className="cross-bar" onClick={explore_close}>
                        <RxCross2 />
                    </div>
                </div>

            </div>


        </>
    )
}

export default Header