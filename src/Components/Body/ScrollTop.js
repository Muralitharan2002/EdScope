import React, { useEffect, useState } from 'react'
import '../../App.css'
import { FiArrowUpCircle } from 'react-icons/fi'


function ScrollTop() {
    const [top, setTop] = useState(false)

    const gotop = () => {
        if (window.scrollY > 200) {
            setTop(true)
        } else {
            setTop(false)
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => (
        window.addEventListener('scroll', gotop)
    ), [])

    return (
        <>
            {top ? <FiArrowUpCircle className='scrolltop' onClick={scrolltoTop} /> : ''}
        </>
    )
}

export default ScrollTop