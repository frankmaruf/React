import React from 'react'
import Common from './Common'
import Hero from "./image/Hero.png"

function About() {
    return (
        <React.Fragment>
            <Common name="Welcome to About Page "
            imgsrc={Hero}
            visit="/contact"
            btname="Contact Now"
            />
        </React.Fragment>
    )
}

export default About
