import React from 'react'
import '../Body/Styles/weprovide.css'
import onlinecourse from '../../Assets/svgs/online-course.svg'

import { FaChalkboardTeacher } from 'react-icons/fa'
import { LuMessagesSquare } from 'react-icons/lu'
import { MdOutlineAssignment } from 'react-icons/md'
import { PiExamBold, PiCertificateBold } from 'react-icons/pi'

function Weprovide() {
    return (
        <div className="provide-container shapedividers_top">
            <div className="container-para">
                <div className="para1">We Provide</div>
                <div className="para2"><span className='para2-span'>best</span> online facilities</div>
            </div>
            <div className="flex-container">
                <div className="flex-img">
                    <img src={onlinecourse} alt="" />
                </div>
                <div className="flex-content">
                    <div className="flex">
                        <div className="icon">
                            <FaChalkboardTeacher className="icon1" />
                            <div className="icon-name">
                                Live class
                            </div>
                        </div>

                        <div className="icon-para">
                            Experience real-time instruction from the comfort of home.
                        </div>
                    </div>
                    <div className="flex">
                        <div className="icon">
                            <LuMessagesSquare className="icon1" />
                            <div className="icon-name">
                                Q&A
                            </div>
                        </div>

                        <div className="icon-para">
                            Interactive sessions to clarify doubts and enhance understanding.
                        </div>
                    </div>
                    <div className="flex">
                        <div className="icon">
                            <MdOutlineAssignment className="icon1" />
                            <div className="icon-name">
                                Assignments
                            </div>
                        </div>

                        <div className="icon-para">
                            Regular assessments to track and improve your performance.
                        </div>
                    </div>
                    <div className="flex">
                        <div className="icon">
                            <PiExamBold className="icon1" />
                            <div className="icon-name">
                                Weekly Tests
                            </div>
                        </div>
                        <div className="icon-para">
                            Hands-on assignments for practical knowledge application.
                        </div>
                    </div>
                    <div className="flex">
                        <div className="icon">
                            <PiCertificateBold className="icon1" />
                            <div className="icon-name">
                                Online Degree
                            </div>
                        </div>

                        <div className="icon-para">
                            Gain a recognized certificate to showcase your achievements.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weprovide