import React from 'react';
import './Styles/brandslider.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import cambride from '../../Assets/svgs/cambride.svg';
import duke from '../../Assets/svgs/duke.svg';
import google from '../../Assets/svgs/google.svg';
import meta from '../../Assets/svgs/meta.svg';
import oxford from '../../Assets/svgs/oxford.svg';
import microsoft from '../../Assets/svgs/microsoft.svg';
import linkedin from '../../Assets/svgs/linkedin.svg';

function BrandSlider() {
    const settings = {
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

        // centerMode: true,
        // centerPadding: '20px'
        // dots: false

    };
    const brands = [
        cambride,
        duke,
        google,
        meta,
        oxford,
        microsoft,
        linkedin
    ];

    return (
        <div className="slider-body">
            <p className="slider-para">
                we collaborate with 200+ leading universities and companies
            </p>
            <Slider className="slider" {...settings}>
                {brands.map((logo, index) => (
                    <div key={index} className='slider-track'>
                        <img src={logo} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BrandSlider;
