import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const BootStrap = () =>{
    return(
        <React.Fragment>
        <h1 className="text-sm-center text-danger my-5">Welcome To My Channel</h1>
<div class="container">
  <div class="row">
    <div class="col-sm">
                  <div className="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
                  <div className="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/202/300" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col-sm">
                  <div className="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
        </React.Fragment>
    )
} 