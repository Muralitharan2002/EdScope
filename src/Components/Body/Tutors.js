import React from 'react'
import '../Body/Styles/tutors.css'
import Tutor from '../../Assets/svgs/tutor.svg'

function Tutors() {
    return (
        <div className="tutor-box shapedividers_top">
            <div className="tutor-title">
                <div className="title1">
                    Tutors
                </div>
                <div className="title2">
                    <span className="title2-span">Meet</span> the Heros
                </div>
            </div>
            <div className="tutor-flex">
                <div className="tutor-content">
                    <div className="content-head">
                        We have highly expert & <br />
                        Experienced tutors
                    </div>
                    <div className="content-para">
                        Our mentor is came up from various background education and been worked in their field for more than five years. We selected them by their experience, achievement and also the practical skill that they have based on real-world experiences.
                    </div>

                </div>
                <div className="tutor-img">
                    <img src={Tutor} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Tutors