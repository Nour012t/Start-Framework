import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import'@fortawesome/fontawesome-svg-core'
import './Home.css'
function Home() {
  return (
    <>
    
    
        <div className="  g-3  w-100 home d-flex  justify-content-center align-items-center flex-column">
        <img className=' w-25' src=" https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="Description" />
            <h1 className=' text-light fw-bolder'> start Framework </h1>
          <div className=" g-3container w-50 d-flex  justify-content-center align-items-center">
              <div className='g-3 line me-2 w-25 '></div>
              <div className='g-3 line me-2 w-25 '></div>

              </div>
             <p className=' pt-3 text-light'>Graphic Artist - Web Designer - Illustrator</p>
                           <i class="fa-solid fa-heart"></i>


            
        </div>
    
    </>
  )
}

export default Home