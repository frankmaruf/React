import React, { useState } from 'react'

function ContactUs() {

    const [data,setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    })

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Your Name is ${data.fullname}. Phone Number is ${data.phone}`)
    }


    const inpuTEvent = (event) => {
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,[name] : value,
            }
        })
    }
    return (
        <React.Fragment>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container container-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>


                        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inpuTEvent} autoComplete="off" placeholder="Enter Your Name"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inpuTEvent} placeholder="Enter Your Phone Number"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inpuTEvent} placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inpuTEvent} rows="3"></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>



                        </form>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactUs
