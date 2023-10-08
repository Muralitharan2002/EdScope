import React from 'react'
import '../Body/Styles/categories.css'
import Image from '../../Assets/Pngs/Image.png'
import Java from '../../Assets/Pngs/java.png'
import react from '../../Assets/Pngs/react.png'
import Flutter from '../../Assets/Pngs/flutter.png'
import Digital from '../../Assets/Pngs/digital.png'
import Backend from '../../Assets/Pngs/Backend.png'


import { FiArrowUpRight } from 'react-icons/fi'
import { TbNotes } from 'react-icons/tb'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdSignalCellular1Bar } from 'react-icons/md'

function Categories() {
    const cardDetails = [
        {
            id: 1,
            imageurl: Image,
            courseName: "Figma UI/UX",
            definition: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
            rating: 4.7,
            counts: "(10,999)",
            price: "4,799",
            duration: "5 hr 30 min",
            lectures: "30 lectures"
        },
        {
            id: 2,
            imageurl: react,
            courseName: "FrontEnd Development",
            definition: "Craft stunning websites and bring your visions to life. Dive deep into the art of frontend magic.",
            rating: 4.5,
            counts: "(20,999)",
            price: "8,999", duration: "8 hr 30 min",
            lectures: "40 lectures"
        },
        {
            id: 3,
            imageurl: Backend,
            courseName: "BackEnd Development",
            definition: "Power the web with seamless server-side solutions. Master the backbone of modern digital platforms.",
            rating: 4.9,
            counts: "(14,999)",
            price: "10,799", duration: "10 hr 30 min",
            lectures: "60 lectures"
        },
        {
            id: 4,
            imageurl: Java,
            courseName: "Java Essential Training",
            definition: "Harness the potential of Java, the timeless titan. Begin your journey with essential skills and practices.",
            rating: 4.2,
            counts: "(30,999)",
            price: "5,599", duration: "6 hr 30 min",
            lectures: "25 lectures"
        },
        {
            id: 5,
            imageurl: Digital,
            courseName: "Digital Marketing",
            definition: "Navigate the digital cosmos and captivate your audience. Ignite your brand's online potential.",
            rating: 4.0,
            counts: "(25,999)",
            price: "11,999",
            duration: "11 hr 30 min",
            lectures: "70 lectures"
        },
        {
            id: 6,
            imageurl: Flutter,
            courseName: "Flutter Crash Course",
            definition: "Flutter beyond boundaries with dynamic apps. Fast-track your mobile development journey.",
            rating: 4.7,
            counts: "(17,999)",
            price: "9,799",
            duration: "9 hr 30 min",
            lectures: "40 lectures"
        }

    ];
    return (
        <div id='Categories-section' className="categories-container shapedividers_com-9601">
            <div className="categories-title">
                <div className="title1">Explore Programs</div>
                <div className="title2"><span className='title2-span'>Our</span> Most Popular Class</div>
            </div>
            <div className="cards-container">
                {cardDetails.map(card => (
                    //<div className="box" key={card.id}>
                    <div className="card" key={card.id}>
                        <div className="card1">
                            <img src={card.imageurl} alt={card.courseName} className="image" />
                        </div>
                        <div className="card2">
                            <div className="courseName">
                                <div className="name">
                                    {card.courseName}
                                    <FiArrowUpRight className="arrow" />
                                </div>
                                <div className="namepara">
                                    {card.definition}
                                </div>
                            </div>
                            <div className="flex2">
                                <div className="time"><AiOutlineClockCircle className='time-img' /> {card.duration}</div>
                                <div className="lecture"><TbNotes className='notes-img' /> {card.lectures}</div>
                                <div className="level"><MdSignalCellular1Bar className='level-img' />Beginner</div>
                            </div>
                            <div className="flex1">
                                <div className="rating">{card.rating}
                                    <span className="count">
                                        {card.counts}
                                    </span>
                                </div>
                                <div className="price">₹ {card.price}</div>
                            </div>
                        </div>
                    </div>
                    //</div>
                ))}
            </div>
            <div className="btn">

                <button className="btn1">Explore All Programs</button>
            </div>
        </div>
    )
}

export default Categories