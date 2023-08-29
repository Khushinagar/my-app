import React from 'react'


function Header() {
  return <nav>
    <NavContent />
  </nav>
    
}

const NavContent =()=>(
  <>
  <h2>Khushi</h2>
  <div>
   <a href='#home'>Home</a>
   <a href='#work'>Work</a>
   <a href='#experience'>experience</a>
   <a href='#services'>Services</a>
   <a href='#testimonial'>Testimonial</a>
   <a href='#contact'>Contact</a>
  </div>
  <a href="mailto:nagar.khushi2001@gmail.com">
    <button>Email</button>
  </a>
  
  </>


)



export default Header