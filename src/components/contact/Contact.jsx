import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="d-flex pt-5    align-items-center flex-column">
<h1>CONTACT SECTION</h1>
<div className=" g-3 container w-50 d-flex  justify-content-center align-items-center">
              <div className='g-3 linee me-2 w-25 '></div>
              <div className='g-3 linee me-2 w-25 '></div>

              </div>
              </div>
              <form className='container  mt-5 col-8 d-flex  flex-column align-content-center justify-content-center'>
  <div className='mt-3'>
    <input type="text" class="form-control" placeholder='user name' id="" aria-describedby="emailHelp"/>
  </div>
  <div className='mt-3'>
    <input type="email" class="form-control" placeholder='user age' id="" aria-describedby="emailHelp"/>
  </div>
  <div className='mt-3' >
    <input type="email" class="form-control" placeholder='user email' id="" aria-describedby="emailHelp"/>
  </div>
  <div className='mt-3'>
    <input type="passward" class="form-control" placeholder='user passward' id="" />
  </div>
  <button type="submit" className="btn btn-success col-3 my-3">Send Message</button>

</form>
       
    </div>
  )
}

export default Contact