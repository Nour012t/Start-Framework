import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer pt-5">
  <div className="container d-flex">
    <div className="col-4 d-flex justify-content-center align-items-center flex-column ">
        <h3>LOCATION</h3>
        <p className=' pb-1'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>

    </div>
    <div className="col-4 d-flex justify-content-center align-items-center flex-column ">
        <h3>AROUND THE WEB</h3>
        <p className=' pb-1'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>

    </div>
    <div className="col-4 d-flex justify-content-center align-items-center flex-column ">
        <h3>ABOUT FREELANCER</h3>
        <p className=' text-center pb-1'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        

    </div>
  </div>

  <div className="end bg-dark text-center py-3 mt-5">
<p>Copyright © Your Website 2021</p>
  </div>
</div>

  )
}

export default Footer