import React from 'react'
import { NavLink } from 'react-router-dom';
function Common(props) {
    return (
        <React.Fragment>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>
                        {props.name}
                        <strong className="brand-name">Abdullah Al Maruf</strong></h1>
                    <h1 className="my-3">
                        We are the team of talented developer
                    </h1>
                    <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                    
                </div>
              </div>
              <div className="col-lg-6 order-1 orderlg-2 header-img">
                  <img src={props.imgsrc} width="350px" height="350px" alt="demo" className="image-fluid animated header-img"/>
              </div>
              </div>
            </div>
          </div>
          </div>
            </section>
        </React.Fragment>
    )
}

export default Common;