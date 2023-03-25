import "./Contact us.css"
import React from 'react'

export default function Contact() {
  return (
    <>
    
    <div className="con " id="contact">
      <div className='text-center'><h3>Contact Us</h3></div>
      <div className='row text-center'>
        <div className="col-4">
          <p className='bi-map-fill text-danger'> Location</p>
          <p>Travel World</p><p>India</p>

        </div>
        <div className="col-4 ">
          <p className='bi-envelope-fill text-danger'> Email</p>
          <p>mail@example.com</p>
          <p>mail2@example.com</p>
        </div>
        <div className="col-4">
          <p className='bi-telephone-fill text-danger'>PHONE NUMBER</p>
          <p>+ 123456789</p>
          <p>+ 09876543333321</p>
        </div>
        <div className='row text-center'>
          <div className="col-4 ">
            <p>NAME*</p>
            <input type='text'></input>
          </div>
          <div className="col-4">
            <p>Email*</p>
            <input type="text"></input>
          </div>
          <div className="col-4">
            <p>PHONE NUMBER*</p>
            <input type="text"></input>
          </div>
          <div className='col-12 mt-3'>
            <h5>HOW CAN WE HELP?</h5>
            <div className="col-10" >
            <textarea className="form-control" rows="14" name="text"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>            
          </div>
        </div>  
      </div>
    </div> 
   
    </>
  )
}
