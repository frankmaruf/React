import React from 'react'
import Common from './Common'
import Demo from "./image/demo.svg"


function Home() {
    return (
        <React.Fragment>
            <Common name="Grow your business with "
            imgsrc={Demo}
            visit="/service"
            btname="Get Started"
            />
        </React.Fragment>
    )
}

export default Home
