import React from 'react'
import "./home.css"
import { ReactComponent as Homeimg } from '../../Assets/svgs/home-svg.svg'

function Home() {
    return (
        <div className="home-body">
            <div className="home-content">
                <div className="home-title">
                    Take Your <br /> Knowledge to the <br />
                    <span className='word1'> Next</span>
                    <span className='word2'> Level</span>
                </div>
                <div className="home-para">
                    Anytime,anywhere to do discover yourself.
                    your learning process and replace lame method with fun and engaging ones.
                </div>
                <div className="home-btn">
                    <button className="btn1">Get Started</button>
                    <button className="btn2">Discover</button>
                </div>
            </div>
            <div className="home-img">
                <Homeimg className="my-svg" />
            </div>
        </div>
    )
}

export default Home