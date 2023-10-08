import React from 'react'
import '../Body/Styles/testimonial.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

function Testimonial() {
    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={`next ${className}`} onClick={onClick}>
                <IoIosArrowDroprightCircle className='next-arrow' />
            </div>
        )
    }
    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={`prev ${className} `} onClick={onClick}>
                <IoIosArrowDropleftCircle className='prev-arrow' />
            </div>
        )
    }


    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]

    }





    const TestimonialList = [
        {
            "name": "Liam P., Graphic Designer",
            "feedback": "Before Edscope, I felt like I was floating in a sea of scattered design resources. Now, I have a structured and effective path to hone my skills. The platform's practical tasks have genuinely transformed the way I approach design."

        },
        {
            "name": "Sophia T., Aspiring UX/UI Designer",
            "feedback": "Transitioning from a different career into design felt daunting, but Edscope's e-learning platform has been a beacon of clarity. The interactive modules and real-time feedback have been instrumental in shaping my design intuition."
        },
        {
            "name": "Ethan W., Freelance Illustrator",
            "feedback": "Edscope is like having a personal design mentor available 24/7. I've refined my techniques, expanded my portfolio, and connected with a community of like-minded creatives. Highly recommended!"
        },
        {
            "name": "Olivia G., Web Designer",
            "feedback": "The courses on Edscope don't just teach you the tools of the trade—they delve deep into the philosophy and nuances of design. I've grown not just as a designer, but as a thinker and problem solver."
        },
        {
            "name": "Aiden L., Motion Graphics Artist",
            "feedback": "Every module on Edscope is like a new adventure, pushing the boundaries of what I thought was possible in design. The challenges are engaging, the feedback invaluable, and the growth? Immeasurable."
        },
        {
            "name": "Mia B., Fashion Tech Innovator",
            "feedback": "Merging technology with design has always been my passion. Edscope's comprehensive courses have helped me see the interconnectedness of disciplines and inspired innovation in my projects."
        },
        {
            "name": "Jackson D., Brand Strategist",
            "feedback": "In the competitive world of design, staying updated is crucial. Thanks to Edscope, I'm not only up-to-date but often ahead of the curve. Their fresh content and industry insights are pure gold."
        },
        {
            "name": "Emma S., Design Student",
            "feedback": "As someone just stepping into the realm of design, Edscope has been the perfect guide. From foundational principles to advanced techniques, I've found a wealth of knowledge that's both accessible and deep."
        },
        {
            "name": "Benjamin K., 3D Modeller",
            "feedback": "The specialized courses on Edscope cater to every niche, including mine. I've sharpened my 3D modeling skills and discovered new techniques that have dramatically improved my workflow."
        },
        {
            "name": "Ava F., Interior Decorator",
            "feedback": "Every space I design now carries a touch of the lessons I've absorbed from Edscope. The platform's focus on holistic design principles has elevated my work to a whole new level."
        }
    ];

    return (
        <div className="Testimonial testimonial_bottom">
            <div className="testimonial-title">
                <div className="testimonial-title1">
                    Our Students
                </div>
                <div className="testimonial-title2">
                    Testimonial
                </div>
            </div>
            <Slider {...settings}>
                {TestimonialList.map((testimonial, index) => (
                    <div className="Testimonial-slider" key={index}>
                        <div className="testimonial-box">
                            <RiDoubleQuotesL className='symbol' />
                            <p className='feedback'>{testimonial.feedback}</p>
                            <h3 className='student-name'>{testimonial.name}</h3>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    )
}

export default Testimonial