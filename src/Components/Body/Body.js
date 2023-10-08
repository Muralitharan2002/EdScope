import React from 'react'
import BrandSlider from './BrandSlider'
import Weprovide from './Weprovide'
import Categories from './Categories'
import Tutors from './Tutors'
import Testimonial from './Testimonial'
import Contactus from './Contactus'
// import ScrollTop from './ScrollTop'


function Body() {
    return (
        <>
            <BrandSlider />
            <div id='Weprovide-section'><Weprovide /></div>
            <div ><Categories /></div>
            <div id='Tutors-section'><Tutors /></div>
            <Testimonial id='Testimonial-section' />
            <div id='contact-section'><Contactus /></div>


        </>
    )
}

export default Body